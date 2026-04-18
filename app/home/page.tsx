"use client"

import SimBash from "@/components/SimBash";
import {useSimBash} from "@/src/hooks/useSimBash";


export default function Home(){

    const { buffer, handleInput, blink, isTyping } = useSimBash("mmarquez", "resume");

    return (
        <div>
            <button onClick={() => handleInput("Okay Just gonna test this real quick", "This is my output", 40)}>
                <pre className={"text-glow text-left text-3xl text-green-400 shadow-green-800"}>
                    {buffer}{blink || isTyping ? "█" : ""}
                </pre>
            </button>
        </div>
    );
}