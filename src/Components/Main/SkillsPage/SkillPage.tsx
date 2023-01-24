import React from "react";
import s from "./SkillsPage.module.css"
import {AboutMe} from "./AboutMe/AboutMe";
import {ServicesAndInterests} from "./ServicesAndInterests/ServicesAndInterests";
import {ProgrammingAndLanguages} from "./ProgrammingAndLanguages/ProgrammingAndLanguages";

export const SkillPage = () => {
    return (
        <div className={s.SkillPage}>
            <div className={s.aboutMeParent}>
                <AboutMe/>
                <ServicesAndInterests/>
                <ProgrammingAndLanguages/>
            </div>
        </div>


    )
}


