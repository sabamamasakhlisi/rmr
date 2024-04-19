import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(en|es)/:path*"],
};
