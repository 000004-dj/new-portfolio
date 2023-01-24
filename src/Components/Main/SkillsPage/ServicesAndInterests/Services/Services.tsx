import s from "./Services.module.css";
import React from "react";
import {TitleWithLine} from "../../../../additionaly-components/TitleWithLine";

// type StateType = Array<string>

const state = [
    "HTML & CSS", "Java Script", "Type Script", "React", "some text"
]


export const Services = () => {
    return <div className={s.services}>
        <TitleWithLine title={"Services"}/>
        <ul>
            {
                state.map(i =>{
                    return <li>- {i}</li>
                }
                )
            }
        </ul>
    </div>
}