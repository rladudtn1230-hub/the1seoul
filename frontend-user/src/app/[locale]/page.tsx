import { hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);

    // 페이지/서브카테고리 네임스페이스로 번역 사용
    const t = await getTranslations("home.hero");

    return (
        <main>
            <h1>{t("title")}</h1>
            <p>{t("subtitle")}</p>
        </main>
    );
}
