"use client"

import {SimBash} from "@/components/SimBash";
import {useSimBash} from "@/src/hooks/useSimBash";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import {useEffect, useState} from "react";
import Navbar from "@/components/Navbar";
import useIsMobile from "@/src/hooks/useIsMobile";


export default function Home(){
    gsap.registerPlugin(SplitText);

    const { buffer, handleInput, toggleZoom, isTyping, idle } = useSimBash({username:"mmarquez", hostname:"resume"});
    const [isIntroVisible, setIsIntroVisible] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const split = SplitText.create(".split", { type: "words, chars" });
        gsap.set(split.chars, { opacity: 0, y: -40 });
        const startIntro = async() => {
            await handleInput("./intro", "Rendering intro...", 75, 800);

            gsap.set(".navbar-anim", { y: isMobile ? 1000 : -100 });
            setIsIntroVisible(true);
            toggleZoom();
            requestAnimationFrame(() => {
                gsap.to(split.chars, {
                    duration: 0.4, opacity: 1, y: 0,
                    stagger: 0.05, ease: "back"});
                gsap.to(".navbar-anim", {
                    duration: 0.6, y: 0, ease: "back"});
            })
        }
        startIntro();
    }, []);

    return (
        <div className={"relative font-sans"}>
            <Navbar props={`navbar-anim ${isIntroVisible ? "" : "hidden"}`}/>
            <SimBash buffer={buffer} isTyping={isTyping} idle={idle} props={"py-16 px-4"}/>
            <div className={"absolute inset-0 flex justify-center"}>
                    <div className={`text-center text-4xl sm:text-5xl lg:text-7xl py-40 ${isIntroVisible ? "" : "hidden"}`}>
                        <p className={"split font-medium lg:text-6xl mb-2 lg:mb-4"}>
                            Hi! I&apos;m</p>
                        <p className={"split font-semibold"}>Matthew Marquez</p>
                    </div>
            </div>
        </div>
    );
}