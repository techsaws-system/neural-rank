import { VideoCarouselProps } from "@/types/components.partials-interfaces";

import acmeLogo from "../../public/logos/acme-logo.png";
import pulseLogo from "../../public/logos/pulse-logo.png";
import echoLogo from "../../public/logos/echo-logo.png";
import celestialLogo from "../../public/logos/celestial-logo.png";
import apexLogo from "../../public/logos/apex-logo.png";
import quantumLogo from "../../public/logos/quantum-logo.png";
import VideoTestimonialThumnail01Img from "../../public/images/testimonial/video-testimonial-01-thumnail.png"
import VideoTestimonialThumnail02Img from "../../public/images/testimonial/video-testimonial-02-thumnail.png"
import VideoTestimonialThumnail03Img from "../../public/images/testimonial/video-testimonial-03-thumnail.png"

import VroomAnimation from "../../public/animations/vroom.json"
import ClickAnimation from "../../public/animations/click.json"
import AnalyticsAnimation from "../../public/animations/graph.json"
import StarsAnimation from "../../public/animations/stars.json"

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
        icon: AnalyticsAnimation,
        title: "Predictive Analytics",
        isNew: false,
        backgroundPositionX: 100,
        backgroundPositionY: 27,
        backgroundSizeX: 177,
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

export const TestimonialSectionContent01: VideoCarouselProps[] = [
    {
        id: "1",
        thumbnail: VideoTestimonialThumnail01Img,
        videoUrl: "https://www.youtube.com/shorts/a2vJLW0ZkX0",
    },
    {
        id: "2",
        thumbnail: VideoTestimonialThumnail02Img,
        videoUrl: "https://www.youtube.com/shorts/a2vJLW0ZkX0",
    },
    {
        id: "3",
        thumbnail: VideoTestimonialThumnail03Img,
        videoUrl: "https://www.youtube.com/shorts/a2vJLW0ZkX0",
    },
];