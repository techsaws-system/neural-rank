import acmeLogo from "../../public/logos/acme-logo.png";
import pulseLogo from "../../public/logos/pulse-logo.png";
import echoLogo from "../../public/logos/echo-logo.png";
import celestialLogo from "../../public/logos/celestial-logo.png";
import apexLogo from "../../public/logos/apex-logo.png";
import quantumLogo from "../../public/logos/quantum-logo.png";

import VroomAnimation from "../../public/animations/vroom.json"
import ClickAnimation from "../../public/animations/click.json"
import StarsAnimation from "../../public/animations/stars.json"

import { ScanSearch, SlidersHorizontal, TrendingUp } from "lucide-react";

export const AchievementSectionContent01 = [
    acmeLogo,
    pulseLogo,
    echoLogo,
    celestialLogo,
    apexLogo,
    quantumLogo,
];

export const AchievementSectionContent02 = [
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

export const DashboardPreviewSectionContent = [
    {
        icon: VroomAnimation,
        title: "User-friendly dashboard",
        isNew: false,
        backgroundPositionX: 0,
        backgroundPositionY: 0,
        backgroundSizeX: 150,
    },
    {
        icon: ClickAnimation,
        title: "One-click optimization",
        isNew: false,
        backgroundPositionX: 98,
        backgroundPositionY: 100,
        backgroundSizeX: 135,
    },
    {
        icon: StarsAnimation,
        title: "Smart keyword generator",
        isNew: true,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
    },
];