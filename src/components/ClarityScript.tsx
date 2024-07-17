"use client";

import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";

export default function ClarityScript() {
    useEffect(() => {
        clarity.init("n6se4mfqju");
    }, []);

    return <></>;
}
