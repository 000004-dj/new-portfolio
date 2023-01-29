import React from "react";
import s from "./SkillsPage.module.css"
import containerStyle from "../../../containerStyle.module.css"
import {TitleText} from "../../additionaly-components/TitleText";

const state = [
    {
        skillName: "React",
        skillDescription: "eaque error ipsum libero maxime molestiae odio" +
            " placeat possimus repudiandae sirror ipsum libero maxime m" +
            "olestiae odio placeat possimus repudiandae sint suscipit",
    },
    {
        skillName: "JavaScript",
        skillDescription: "eaque error ipsum libero maxime molestiae odio" +
            " placeat possimus repudiandae sirror ipsum libero maxime m" +
            "olestiae odio placeat possimus repudiandae sint suscipit",
    },
    {
        skillName: "Redux",
        skillDescription: "eaque error ipsum libero maxime molestiae odio" +
            " placeat possimus repudiandae sirror ipsum libero maxime m" +
            "olestiae odio placeat possimus repudiandae sint suscipit",
    },

]

export const SkillPage = () => {
    return (
        <div className={s.SkillPage}>
            <TitleText title={"MY SKILLS"}/>
            <div className={containerStyle.flexContainer}>
                {state.map(i => {
                    return <div className={s.cards}>
                        <div className={s.cardsImage}></div>
                        <p>{i.skillName}</p>
                        <p>{i.skillDescription} </p>
                    </div>
                })}
            </div>

        </div>


    )
}


