import React from "react";
import s from "./Job.module.css"
import {TitleText} from "../../additionaly-components/TitleText";

export const Job = () => {
    return (
        <div className={s.Job}>
            <div className={s.jobContainer}>
                {/*<h2 className={s.title}>Looking into remote work options</h2>*/}
                <TitleText title={"Looking into remote work options"}/>
                <a href="#" className={s.button}>Hire me</a>
            </div>
        </div>
    )
}