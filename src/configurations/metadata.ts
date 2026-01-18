import type { Metadata } from "next";

import { siteConfig } from "./site";

const baseUrl =
    siteConfig.url && siteConfig.url.startsWith("http")
        ? siteConfig.url
        : process.env.NEXT_PUBLIC_SITE_URL;

if (!baseUrl) {
    throw new Error(
        "❌ siteConfig.url or NEXT_PUBLIC_SITE_URL must be defined"
    );
}

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),

    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    applicationName: siteConfig.name,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",

    keywords: [...siteConfig.keywords],

    authors: siteConfig.authors.map((a) => ({
        ...a,
        url: a.url ?? baseUrl,
    })),

    creator: siteConfig.creator,
    publisher: siteConfig.publisher,

    manifest: "/manifest.json",

    icons: {
        icon: [
            { url: "/favicons/favicon.ico" },
            {
                url: "/favicons/logo-96x96.png",
                sizes: "96x96",
                type: "image/png",
            },
            {
                url: "/favicons/logo.svg",
                type: "image/svg+xml",
            },
        ],
        apple: [
            {
                url: "/favicons/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    robots: siteConfig.seoDefaults.robots,

    alternates: {
        canonical: baseUrl,
    },

    category: "technology",
};
