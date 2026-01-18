import type { Metadata } from "next";

import { siteConfig } from "../configurations/site";

export function PageMetadata({
    title,
    description,
    path,
    noIndex = false,
}: {
    title?: string;
    description?: string;
    path?: string;
    noIndex?: boolean;
}): Metadata {
    const baseUrl =
        siteConfig.url && siteConfig.url.startsWith("http")
            ? siteConfig.url
            : process.env.NEXT_PUBLIC_SITE_URL;

    if (!baseUrl) {
        throw new Error(
            "❌ siteConfig.url or NEXT_PUBLIC_SITE_URL must be defined"
        );
    }

    const url = path ? `${baseUrl}${path}` : baseUrl;

    const resolvedTitle = title
        ? `${title} | ${siteConfig.name}`
        : siteConfig.title;

    const resolvedDescription =
        description ?? siteConfig.description;

    return {
        title: resolvedTitle,
        description: resolvedDescription,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title: resolvedTitle,
            description: resolvedDescription,
            url,
            siteName: siteConfig.name,
            type: "website",
            images: [
                {
                    url: siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: resolvedTitle,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: resolvedTitle,
            description: resolvedDescription,
            images: [siteConfig.ogImage],
        },

        robots: noIndex
            ? { index: false, follow: false }
            : siteConfig.seoDefaults.robots,
    };
}
