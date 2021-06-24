import React, { ReactElement, useState } from "react";
import menuImage from '../../images/Mahen.jpg';
import './MenuComponent.scss';
import MenuExpandComponent from './MenuExpand/MenuExpandComponent';

export default function MenuComponent(): ReactElement {
    const [hover, setHover] = useState(false);
    const onHover = () => {
    setHover(true);
    };

    const onLeave = () => {
    setHover(false);
    };
    return (
    <div className="Menu-position"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
        <img src={menuImage} className="Menu-image" alt="ME" />
        {hover &&  <MenuExpandComponent/>}
    </div>
    );
}