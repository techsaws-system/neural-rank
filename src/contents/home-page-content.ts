import acmeLogo from "../../public/logos/acme-logo.png";
import pulseLogo from "../../public/logos/pulse-logo.png";
import echoLogo from "../../public/logos/echo-logo.png";
import celestialLogo from "../../public/logos/celestial-logo.png";
import apexLogo from "../../public/logos/apex-logo.png";
import quantumLogo from "../../public/logos/quantum-logo.png";

import { ScanSearch, SlidersHorizontal, TrendingUp } from "lucide-react";

export const ClientsSectionContent = [
    acmeLogo,
    pulseLogo,
    echoLogo,
    celestialLogo,
    apexLogo,
    quantumLogo,
];

export const AchievementSectionContent = [
    {
        value: "70%",
        label: "Drop in Manual Work",
    },
    {
        value: "1000+",
        label: "Campaigns in Motion",
    },
    {
        value: "75%",
        label: "Efficiency Boost",
    },
    {
        value: "50M+",
        label: "Data Points Analyzed",
        hideOnMobile: true,
    },
    {
        value: "10+",
        label: "AI Trained Models",
        hideOnMobile: true,
    },
];

export const ProcessSectionContent01 = [
    {
        step: "01",
        title: "Analyze",
        icon: ScanSearch,
        description:
            "We audit your site, competitors, and search landscape using AI-driven insights to identify ranking gaps and growth opportunities.",
        class: "col-span-1",
    },
    {
        step: "02",
        title: "Optimize",
        icon: SlidersHorizontal,
        description:
            "Content, structure, and technical signals are optimized for Google and AI-based search engines with precision.",
        class: "col-span-1",
    },
    {
        step: "03",
        title: "Scale",
        icon: TrendingUp,
        description:
            "We continuously improve rankings, traffic, and authority using data feedback loops and adaptive strategies.",
        class: "lg:col-span-1 md:col-span-2 col-span-1",
    },
];