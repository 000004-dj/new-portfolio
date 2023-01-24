import React from "react";
import {TitleWithLine} from "../../additionaly-components/TitleWithLine";
import {Project} from "./Project/Project";
import s from "./Portfolio.module.css"

export const Portfolio = () => {
    return (
        <div className={s.Portfolio}>
            <br/>
            <TitleWithLine title={"CREATIVE PORTFOLIO"}/>
            <br/>
                <Project/>
        </div>
    )
}


