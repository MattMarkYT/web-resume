"use client"

import {Dispatch, SetStateAction, useCallback, useState} from "react";

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

export function useSimBash(username = "jdoe",
                           hostname = "my-pc",
                           startingDir = "~") {

    const shellPrompt = `[${username}@${hostname} ${startingDir}]$ `;
    const [currentDir, setCurrentDir] = useState(startingDir);
    const [buffer, setBuffer] = useState(shellPrompt);
    const [isTyping, setIsTyping] = useState(false);

    const handleInput = useCallback(async (input: string, output = "", delay = 50) => {
        if (isTyping) return;
        setIsTyping(true);

        const newBuffer = await animatedTyping(setBuffer, buffer, input, delay);
        setBuffer(newBuffer + (output ? `\n${output}\n` : "\n") + shellPrompt);

        setIsTyping(false);
    }, [buffer, isTyping, shellPrompt]);

    return { buffer, handleInput };

}