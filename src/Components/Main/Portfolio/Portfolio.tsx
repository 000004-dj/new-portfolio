import React from "react";
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {Project} from "./Project/Project";
import s from "./Portfolio.module.css"

export const Portfolio = () => {
    return (
        <div className={s.Portfolio}>
            <TitleText title={"CREATIVE PORTFOLIO"}/>

                <Project/>
        </div>
    )
}


