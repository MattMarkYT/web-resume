"use client"

import SimBash from "@/components/SimBash";
import {useSimBash} from "@/src/hooks/useSimBash";


export default function Home(){

    const { buffer, handleInput } = useSimBash("mmarquez", "resume");

    return (
        <div>
            <button onClick={() => handleInput("Okay Just gonna test this real quick", "", 40)}>
                <pre className={"text-left text-xl drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] font-mono text-green-400 shadow-green-800"}>{buffer}</pre>
            </button>
        </div>
    );
}