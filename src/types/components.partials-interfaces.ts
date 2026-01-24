import { StaticImageData } from "next/image";

export interface AnimatedBadgeProps {
    heading: string;
    className?: string;
}

export interface WordFlipProps {
    words?: string[];
    interval?: number;
    className?: string;
    textClassName?: string;
    animationDuration?: number;
}

export interface VideoCarouselProps {
    id: string;
    thumbnail: string | StaticImageData;
    videoUrl: string;
}

export type BackgroundGridProps = {
    children: React.ReactNode;
    className?: string;
    gridSize?: number;
    lineWidth?: number;
    opacity?: number;
};