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