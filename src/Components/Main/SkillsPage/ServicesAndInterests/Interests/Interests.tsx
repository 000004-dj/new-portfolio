import s from "./Interests.module.css";
import React from "react";
import {TitleWithLine} from "../../../../additionaly-components/TitleWithLine";

// type StateType = Array<string>

const state = [
    "Programming", "Music", "Driving", "Traveling",
]

export const Interests = () => {
    return <div className={s.interests}>
        <TitleWithLine title={"Interests"}/>
        <ul>
            {
                state.map(i=>{
                    return <li>- {i}</li>
                })
            }
        </ul>
    </div>
}