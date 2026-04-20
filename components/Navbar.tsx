"use client"

import React, {HTMLAttributes} from 'react';
import useIsMobile from "@/src/hooks/useIsMobile";
import {Heart} from "lucide-react";
import {useSimBashContext} from "@/src/providers/SimBashProvider";
import Image from "next/image";
import logo from '@/public/logo/MattCreationsLogo.webp'
import logoText from '@/public/logo/MattCreationsLogoText.webp'

const OPTIONS = ["Contact","Projects","About"];

export default function Navbar({props}:{ props?: string }) {
    const { buffer, isTyping, idle } = useSimBashContext();
    const isMobile = useIsMobile();
    console.log(isMobile);

    return (
        <div className={`navbar-anim ${idle ? "" : "hidden"} z-50 ${props}`}>
            {isMobile ? (
                <nav className="fixed bottom-0 left-0 w-full bg-foreground z-50">
                    <div className="container mx-auto py-8">
                        <div className="text-center text-background text-5xl">Hi</div>
                    </div>
                </nav>
            ) : (
                <nav className="fixed top-0 left-0 w-full bg-foreground z-50">
                    <div className="max-w-7xl mx-auto text-background flex justify-between items-center h-16 sm:h-18 lg:h-22">
                        <div className="flex justify-start items-center gap-3">
                            <div className={"flex justify-start relative h-15 sm:h-17 lg:h-20 w-16 sm:w-18 lg:w-22"}>
                                <Image src={logo} alt="Logo" fill className="object-contain"/>
                            </div>
                            <div className={"flex justify-start relative h-16 sm:h-18 lg:h-22 w-55 sm:w-62 lg:w-70"}>
                                <Image src={logoText} alt="LogoText" fill className="object-contain"/>
                            </div>
                        </div>
                        <div className="flex text-4xl items-center justify-end min-w-50 max-w-7xl">
                            {OPTIONS.map((option) => (
                                <div className={"min-w-50 max-w-7xl"} key={option}>
                                    <span className={"flex text-center"}>{option}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </nav>
            )}
        </div>
    );
};