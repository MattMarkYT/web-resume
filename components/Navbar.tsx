"use client"

import React, {HTMLAttributes} from 'react';
import useIsMobile from "@/src/hooks/useIsMobile";
import {Heart} from "lucide-react";

export default function Navbar({props}:{ props?: string }) {
    const isMobile = useIsMobile();
    console.log(isMobile);

    return (
        <div className={`${props} z-50`}>
            {isMobile ? (
                <nav className="fixed bottom-0 left-0 w-full bg-foreground z-50">
                    <div className="container mx-auto py-8">
                        <div className="text-center text-background text-5xl">Hi</div>
                    </div>
                </nav>
            ) : (
                <nav className="fixed top-0 left-0 w-full bg-foreground z-50">
                    <div className="max-w-7xl mx-auto flex justify-between items-center h-16 sm:h-18 lg:h-22">
                        <div className="text-center text-background text-5xl">Hi</div>
                    </div>
                </nav>
            )}
        </div>
    );
};