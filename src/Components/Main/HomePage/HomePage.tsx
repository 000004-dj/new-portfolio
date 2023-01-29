import s from "./HomePage.module.css";
import containerStyle from "../../../containerStyle.module.css"
import React from "react";
import photo from "../../../assets/images/Photo.jpg"
import {TitleText} from "../../additionaly-components/TitleText";

export const HomePage = () => {
    return <div className={s.HomePage}>

        <div className={containerStyle.flexContainer}>

            <div className={s.textBlock}>
                <TitleText title={"Samuil Prytchyn"}/>
                <p>Lorem ipsum dolor sit amet</p>
                <p>
                    Lorem ipsum dolor sit Corporis culpa
                    cupiditate dolore, eaque error ipsum
                    libero maxime molestiae odio placeat
                    possimus repudiandae sint suscipit u
                    t vel veniam voluptatibus. Eaque, su
                    scipit?
                </p>

            </div>

            <div className={s.image} style={{backgroundImage: `url(${photo})`}}></div>

        </div>

    </div>
}