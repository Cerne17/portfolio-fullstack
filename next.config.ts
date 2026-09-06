import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default withNextIntl(nextConfig);
