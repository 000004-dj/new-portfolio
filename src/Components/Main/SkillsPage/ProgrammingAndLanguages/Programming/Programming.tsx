import s from "./Programming.module.css";
import {Slider} from "@mui/material";
import React from "react";
import {TitleWithLine} from "../../../../additionaly-components/TitleWithLine";

// type StateType = {
//     title: string
//     disabledDefaultValue: number
// }

const state = [
    {
        title: "HTML & CSS",
        disabledDefaultValue: 80,
    },
    {
        title: "Java Script",
        disabledDefaultValue: 70,
    },
    {
        title: "Type Script",
        disabledDefaultValue: 90,
    },
    {
        title: "React",
        disabledDefaultValue: 100,
    },

]

export const Programming = () => {
    return (
        <div className={s.programming}>
            <TitleWithLine title={"Programming"}/>
            <ul>
                {state.map(i=>{
                    return <li className={s.programmingItem}>
                        <p>- {i.title}</p>
                        <p><Slider
                            disabled defaultValue={i.disabledDefaultValue}
                            sx={{h: "5px", width: "80%"}}
                        /></p>
                    </li>
                })}

            </ul>
        </div>

    )
}