import React, { useEffect, useState } from 'react'
import "./UtilsCard.scss";
import { FaForward } from "react-icons/fa6";
import { generateSecurePassword } from "./GeneratePassword";

interface UtilsData {
    name: string,
    desc: string
}

export const UtilsCard = (props: {data: UtilsData}): JSX.Element => {
    const [visible, setVisible] = useState(false);
    function TimedMessage() {
        const password=generateSecurePassword(20);
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
                <p>{props.data.name}</p>
            </div>
            <div className="utilscarddesc">
                <p>{props.data.desc}&nbsp;&nbsp; <FaForward onClick={() => setVisible(true)}/></p>
                <TimedMessage />
            </div>
        </div>
    )
}
