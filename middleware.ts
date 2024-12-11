import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { defaultLocale } from "./contants/locales";
import { i18n } from "./i18n-config";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();

export function middleware(request: any) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = match(languages, i18n.locales, defaultLocale);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
