"use client"

import {useSimBash} from "@/src/hooks/useSimBash";
import {useEffect, useState} from "react";

export default function SimBash(

) {

    const { buffer, handleInput } = useSimBash("mmarquez", "resume");

    return (
        <pre className={"text-xl drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] font-mono text-green-400 shadow-green-800"}>{buffer}</pre>
    )

}