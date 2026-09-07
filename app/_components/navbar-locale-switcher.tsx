"use client";

import { getLocalizedUrl } from "intlayer";
import { useLocale } from "next-intlayer";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const LOCALE_LABELS: Record<string, string> = {
  "pt-BR": "pt",
  en: "en",
};

export function NavbarLocaleSwitcher() {
  const { locale, pathWithoutLocale, availableLocales, setLocale } =
    useLocale();
  const router = useRouter();

  return (
    <div className="gap-inner-gap flex items-center text-xs uppercase">
      {availableLocales.map((localeItem) => (
        <Link
          key={localeItem}
          className={cn(
            "text-title-100/50",
            locale === localeItem && "text-title-100 underline",
          )}
          replace
          aria-current={locale === localeItem ? "page" : undefined}
          href={getLocalizedUrl(pathWithoutLocale, localeItem)}
          onClick={() => {
            setLocale(localeItem);
            router.refresh();
          }}
        >
          {LOCALE_LABELS[localeItem] ?? localeItem}
        </Link>
      ))}
    </div>
  );
}
