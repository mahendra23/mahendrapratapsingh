import React, { ReactElement, useEffect, useState } from 'react'
import "./UtilsCard.scss";
import { FaForward } from "react-icons/fa6";
import { generatePassword } from "./GeneratePassword";

interface UtilsData {
    name: string,
    desc: string
}

export default function UtilsCard({name, desc}: UtilsData): ReactElement {
    const [visible, setVisible] = useState(false);
    function TimedMessage() {
        const password=generatePassword();
        useEffect(() => {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 30000); // 1 minute = 60000 ms

            return () => clearTimeout(timer); // cleanup
        }, []);

        if (!visible) return null;

        return (
            <div>
                <p>{password}</p>
                <p>This password will disappear after 30 seconds ⏳</p>
            </div>
        );
    }
    return (
        <div className="utilscardcontainer">
            <div className="utilscardheading">
                <p>{name}</p>
            </div>
            <div className="utilscarddesc">
                <p>{desc}&nbsp;&nbsp; <FaForward onClick={() => setVisible(true)}/></p>
                <TimedMessage />
            </div>
        </div>
    )
}
