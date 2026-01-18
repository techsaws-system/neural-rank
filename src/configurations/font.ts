import { Poppins, Inter } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const FontVariables = `${poppins.variable} ${inter.variable}`;
