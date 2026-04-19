"use client"

import {Dispatch, SetStateAction, useCallback, useState} from "react";
import gsap from "gsap";

const animatedTyping = (setStateText:  Dispatch<SetStateAction<string>>,
                                                            stateText: string,
                                                            text = "",
                                                            delay = 80) => {
    return new Promise<string> (resolve => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setStateText(stateText += text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
                resolve(stateText);
            }
        }, delay);
    });
};

type SimBashProps = {
    username: string,
    hostname: string,
    startingDir?: string,
    blinkRate?: number
}

export function useSimBash({username = "jdoe",
                           hostname = "my-pc",
                           startingDir = "~"} : SimBashProps) {

    const shellPrompt = `[${username}@${hostname} ${startingDir}]$ `;
    const [currentDir, setCurrentDir] = useState(startingDir);
    const [buffer, setBuffer] = useState(shellPrompt);
    const [isTyping, setIsTyping] = useState(false);
    const [idle, setIdle] = useState(false);

    const handleInput = useCallback(async (input: string, output = "", delay = 50, outputDelay = 0) => {
        if (isTyping) return;
        setIsTyping(true);

        await animatedTyping(setBuffer, buffer, input, delay);

        setBuffer(oldBuffer =>
            oldBuffer + (output ? `\n${output}\n` : "\n"));

        await new Promise(resolve => setTimeout(resolve, outputDelay));

        setBuffer(oldBuffer => oldBuffer + shellPrompt);
        setIsTyping(false);
    }, [buffer, isTyping, shellPrompt]);


    const zoomOut = useCallback(() => {
        gsap.to(".console-zoom", {
            scale: 0.8,
            duration: 0.8,
            ease: "power3.out"});},[]);

    const zoomIn = useCallback(() => {
        gsap.to(".console-zoom", {
            scale: 1,
            duration: 0.8,
            ease: "power3.out"});},[]);
    const toggleZoom = useCallback(() => {
        if (!idle) zoomOut();
        else zoomIn();
        setIdle(!idle);
    },[idle, zoomIn, zoomOut]);

    return { buffer, handleInput, toggleZoom, isTyping, idle };

}