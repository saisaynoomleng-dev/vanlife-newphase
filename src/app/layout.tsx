import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/font";

export const metadata: Metadata = {
    title: {
        default: "VanLife",
        template: "%s | VanLife",
    },
    description:
        "VanLife is an American Travellers' favorite vans renting service. They offer different types of vans for your next vacation. ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
