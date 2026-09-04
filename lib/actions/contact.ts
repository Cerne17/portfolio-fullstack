"use server";

import { Resend } from "resend";
import { links } from "@/lib/dictionary";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot — real users never fill this (hidden off-screen); bots that
  // blindly fill every field do. Pretend success so they don't retry smarter.
  if (formData.get("company")) {
    return { status: "success" };
  }

  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Fill in every field." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      status: "error",
      message: "Contact form isn't configured yet — email me directly instead.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "cerne.pro <onboarding@resend.dev>",
      to: links.email,
      replyTo: email,
      subject: `New message from ${name} via cerne.pro`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend API error:", error);
      return {
        status: "error",
        message: "That didn't send. Try again, or message me on LinkedIn.",
      };
    }

    return { status: "success" };
  } catch (err) {
    console.error("Resend send failed:", err);
    return {
      status: "error",
      message: "That didn't send. Try again, or message me on LinkedIn.",
    };
  }
}
