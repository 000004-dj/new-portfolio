import s from "./HomePage.module.css";
import containerStyle from "../../../containerStyle.module.css"
import React from "react";
import photo from "../../../assets/images/photo.png"
import {HomePageTitleText} from "../../additionaly-components/HomePageTitleText";

export const HomePage = () => {
    return <div className={s.HomePage}>

        <div className={containerStyle.flexContainer}>

            <div className={s.textBlock}>
                <HomePageTitleText title={"Hi, i am Samuil and i Frontend Developer"}/>

            </div>

            <div className={s.image} style={{backgroundImage: `url(${photo})`}}></div>

        </div>

    </div>
}