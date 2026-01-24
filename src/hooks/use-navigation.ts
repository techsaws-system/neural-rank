"use client";

import { useRouter } from "next/navigation";

export const useNavigation = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        if (!path) return;
        router.push(path);
    };

    return { navigateTo };
};
