export const siteConfig = {
    name: "Neural Rank",
    shortName: "Neural Rank",
    title: "Neural Rank – AI-Powered SEO Platform for Real Rankings",
    description:
        "Neural Rank is an AI-powered SEO platform helping businesses rank higher, optimize content, and grow organic traffic with intelligent, data-driven search strategies across Google and AI-driven search engines.",

    tagline:
        "AI-powered SEO platform helping brands rank higher, grow faster, and dominate search.",

    url: process.env.NEXT_PUBLIC_SITE_URL,
    ogImage: "/favicons/og-image.png",
    logo: "/favicons/logo.png",

    keywords: [
        "AI SEO platform",
        "AI-powered SEO",
        "SEO automation",
        "keyword intelligence",
        "content optimization",
        "search engine optimization",
        "AI search optimization",
        "Google SEO tools",
        "SEO analytics platform",
        "organic traffic growth",
        "ranking optimization",
        "AI marketing tools"
    ],

    authors: [
        {
            name: "Neural Rank",
            url: process.env.NEXT_PUBLIC_SITE_URL
        }
    ],

    creator: "Neural Rank",
    publisher: "Neural Rank",

    language: "en-US",
    locale: "en_US",

    themeColor: "#0A0A0B",
    backgroundColor: "#0A0A0B",

    contact: {
        email: "info@neuralrank.com"
    },

    links: {
        home: "/",
        solutions: "/solutions",
        about: "/about",
        pricings: "/pricings",
    },

    features: [
        "AI keyword intelligence",
        "Content optimization for search & AI engines",
        "Local SEO optimization",
        "Performance analytics & reporting",
        "Search intent modeling",
        "AI-assisted ranking insights"
    ],

    seoDefaults: {
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-snippet": -1,
                "max-image-preview": "large",
                "max-video-preview": -1
            }
        }
    }
} as const;

export type SiteConfig = typeof siteConfig;
