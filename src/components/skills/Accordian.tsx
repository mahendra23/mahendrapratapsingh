import React, { ReactElement, useState } from 'react';
import "./Accordian.scss";
import { FcCollapse, FcExpand } from "react-icons/fc";

// @ts-ignore
export default function Accordian({active, setActive, data}): ReactElement {
    const [openAccordion, setOpenAccordion] = useState(false);
    function handleOpenAccordion() {
        setOpenAccordion(!openAccordion);
        setActive(active === data.title ? "" : data.title);
    }
    return (
        <div className="accordion">
            <div className="accordionheading">
                <div className="headingcontainer">
                    <p>{data.title}</p>
                    <span className={`accordionicon ${openAccordion ? 'open' : ''}`} onClick={handleOpenAccordion}><FcExpand /></span>
                </div>
            </div>
            <div className={(openAccordion ? "show" : "") + "accordioncontent"}>
                <div className="contentcontainer">
                    {data.row1 && 
                        <div className="row">
                            {data.row1.map((skill: string) => (<span>{skill}</span>))}
                        </div>
                    }
                    {data.row2 && 
                        <div className="row">
                            {data.row2.map((skill: string) => (<span>{skill}</span>))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}