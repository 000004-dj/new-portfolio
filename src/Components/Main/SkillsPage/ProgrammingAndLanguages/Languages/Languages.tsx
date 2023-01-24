import s from "./Languages.module.css";
import React from "react";
import {TitleWithLine} from "../../../../additionaly-components/TitleWithLine";

const state = [
    "Programming", "Music", "Driving", "Traveling", "Something", "Something"
]

export const Languages = () => {
    return (
        <div className={s.language}>
            <TitleWithLine title={"Languages"}/>
            <ul>
                {state.map(i => {
                    return <li className={s.languageItem}>- {i}</li>
                })}
            </ul>
        </div>

    )
}