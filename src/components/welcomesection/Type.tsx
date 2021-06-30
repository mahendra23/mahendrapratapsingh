import React, { ReactElement } from 'react';
import Typewriter from "typewriter-effect";

export default function Type(): ReactElement {
    return (
        <Typewriter
            options={{
            strings: [
                "Can do iOS Development",
                "Can do React development",
                "Test Management",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            }}
        />
    )
}
