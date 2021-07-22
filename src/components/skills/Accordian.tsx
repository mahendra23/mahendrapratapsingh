import React, { ReactElement } from 'react';
import "./Accordian.scss";
import { FcCollapse, FcExpand } from "react-icons/fc";

// @ts-ignore
export default function Accordian({active, setActive, data}): ReactElement {
    return (
        <div className="accordion">
            <div className="accordionheading">
                <div className="headingcontainer">
                    <p>{data.title}</p>
                    {active === data.title ? <span onClick={() => setActive("")}><FcCollapse /></span> : <span onClick={() => setActive(data.title)}><FcExpand /></span> }
                </div>
            </div>
            <div className={(active === data.title ? "show" : "") + "accordioncontent"}>
                <div className="contentcontainer">
                    {data.row1 && 
                        <div className="row">
                            {data.row1.map((skill: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (<span>{skill}</span>))}
                        </div>
                    }
                    {data.row2 && 
                        <div className="row">
                            {data.row2.map((skill: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (<span>{skill}</span>))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
