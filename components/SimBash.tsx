"use client"

import "@/components/SimBash.css"

type SimBashProps = {
    buffer: string,
    isTyping: boolean
    idle: boolean
    props: string
}

export function SimBash({buffer,
                        isTyping,
                        idle = false,
                        props = ""} : SimBashProps
) {

    return (
        <div className={`-z-10 ${props}`} aria-hidden="true">
            { /* Black overlay */}
            <div className={`${idle ? "console-fade-on" : "console-fade-off"} absolute inset-0 h-screen w-screen bg-background -z-1`}></div>
            <pre className={`relative text-glow text-left sm:text-3xl lg:text-3xl text-green-400 shadow-green-800 console-zoom -z-10`}>
                {buffer}
                <span className={isTyping ? "" : "bash-cursor"}>
                    █
                </span>
            </pre>
        </div>

    )

}