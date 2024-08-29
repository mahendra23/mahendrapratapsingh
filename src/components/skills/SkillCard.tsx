import React from 'react';
import "./SkillCard.scss";
import { SkillSetDataToolType, SkillSetDataType } from "../../mockdata/skillsData";
import { GoDotFill } from "react-icons/go";
import { ICONS_FOLDER } from "../../common/constants";

export const SkillCard = (props: {data: SkillSetDataType, isLast: boolean}): JSX.Element => {
    return (
        <div className="skillcard">
            <div className="headingcontainer">
                <p>{props.data.title}</p>
            </div>
            {props.data.toolslist && 
                <div className="toollist">
                    {props.data.toolslist.map((tool: SkillSetDataToolType) => (
                            <div className="tooldata">
                                <div className="toolimage">
                                    {tool.toolIcon && <img alt={tool.toolname} src={`${ICONS_FOLDER}/${tool.toolIcon}`} />}
                                    {!tool.toolIcon && <GoDotFill />}
                                </div>
                                <div className="toolname">
                                    {tool.toolname}
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
};