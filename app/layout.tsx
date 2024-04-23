import "./globals.css";

import type { Metadata } from "next";
import { type ReactElement } from "react";

import { Footer, Header } from "@/components";
import { inter, poppins } from "@/fonts";

type RootProps = {
    children: ReactElement | ReactElement[];
};

const metadata: Metadata = {
    title: "A 30m dApp",
};

const RootLayout = ({ children }: RootProps): ReactElement => (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
        <body className="h-screen flex flex-col">
            <Header />
            <div className="grow flex justify-center items-center relative">
                {children}
            </div>
            <Footer />
        </body>
    </html>
);

export { RootLayout as default, metadata };
