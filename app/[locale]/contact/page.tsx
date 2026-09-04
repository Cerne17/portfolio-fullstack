import { ContactPageContent } from "@/components/ContactPageContent";

export default function ContactPage() {
  const resendEnabled = Boolean(process.env.RESEND_API_KEY);
  return <ContactPageContent resendEnabled={resendEnabled} />;
}
