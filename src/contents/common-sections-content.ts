import VideoTestimonialThumnail01Img from "../../public/images/testimonial/video-testimonial-01-thumnail.png"
import VideoTestimonialThumnail02Img from "../../public/images/testimonial/video-testimonial-02-thumnail.png"
import VideoTestimonialThumnail03Img from "../../public/images/testimonial/video-testimonial-03-thumnail.png"

import VroomAnimation from "../../public/animations/vroom.json"
import ClickAnimation from "../../public/animations/click.json"
import AnalyticsAnimation from "../../public/animations/graph.json"
import StarsAnimation from "../../public/animations/stars.json"

export const TestimonialSectionContent = [
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

export const FaqSectionContent = [
    {
        question: "What is Neural Rank?",
        answer:
            "Neural Rank is a comprehensive platform designed to streamline your business operations with intelligent AI solutions. It combines multiple tools and services into one unified platform.",
    },
    {
        question: "What is the Neural Rank app, and how does it fit in?",
        answer:
            "The Neural Rank app is the mobile and desktop application that gives you access to all our services on the go. It integrates seamlessly with our web platform for a consistent experience across all devices.",
    },
    {
        question: "Do I need to download the app to benefit from Neural Rank’s services?",
        answer:
            "No, you can access Neural Rank through our web platform without downloading the app. However, the app provides enhanced functionality and offline access to certain features.",
    },
    {
        question: "Is Neural Rank right for startups or local businesses?",
        answer:
            "Absolutely! Neural Rank is designed to scale with your business. Whether you're a startup or an established local business, our flexible plans can accommodate your needs.",
    },
    {
        question: 'What does Neural Rank mean by “all-in-one”?',
        answer:
            "All-in-one means that Neural Rank consolidates multiple business solutions into a single platform, eliminating the need for multiple subscriptions and integrations.",
    },
];

export const DashboardPreviewSection01Content = [
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

export const CtaSectionContent = [
    "Live Web Analysis & Instant Fixes",
    "Run Meta and Google Ad Campaigns",
    "Manage Your GMB",
    "Automated Weekly Performance Reports",
]