import s from "./AboutMe.module.css";
import React from "react";
import {TitleWithLine} from "../../../additionaly-components/TitleWithLine";
import {AboutMeBio} from "./AboutMeBio/AboutMeBio";
import {AboutMeInfo} from "./AboutMeInfo/AboutMeInfo";

export const AboutMe = () => {
    return (
        <>
            <TitleWithLine title={"About me"}/>
            <br/>
            <div className={s.aboutMyContainer}>
                <AboutMeBio/>
                <AboutMeInfo/>
            </div>
        </>
    )
}


