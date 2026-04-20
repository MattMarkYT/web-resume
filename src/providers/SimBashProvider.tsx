"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { useSimBash } from "@/src/hooks/useSimBash";

type SimBashContextValue = ReturnType<typeof useSimBash>;

type SimBashProviderProps = {
    children: ReactNode;
    username?: string;
    hostname?: string;
    startingDir?: string;
};

const SimBashContext = createContext<SimBashContextValue | null>(null);

export function SimBashProvider({
                                    children,
                                    username = "jdoe",
                                    hostname = "my-pc",
                                    startingDir = "~",
                                }: SimBashProviderProps) {
    const sim = useSimBash({ username, hostname, startingDir });

    return (
        <SimBashContext.Provider value={sim}>
            {children}
        </SimBashContext.Provider>
    );
}

export function useSimBashContext(): SimBashContextValue {
    const ctx = useContext(SimBashContext);
    if (!ctx) {
        throw new Error(
            "useSimBashContext must be used within a <SimBashProvider>."
        );
    }
    return ctx;
}