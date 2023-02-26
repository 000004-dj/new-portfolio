import React from "react";
import s from "./SkillsPage.module.scss"
import containerStyle from "../../../containerStyle.module.scss"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {v1} from "uuid";
import {AiOutlineRight } from "react-icons/ai";
import {SiRedux, SiJavascript} from "react-icons/si";
import {FaReact} from "react-icons/fa";

const state = [
    {
        id:v1(),
        skillName: "React",
        skillDescription: "eaque error ipsum libero maxime molestiae odio" +
            " placeat possimus repudiandae sirror ipsum libero maxime m" +
            "olestiae odio placeat possimus repudiandae sint suscipit",
    },
    {
        id:v1(),
        skillName: "JavaScript",
        skillDescription: "eaque error ipsum libero maxime molestiae odio" +
            " placeat possimus repudiandae sirror ipsum libero maxime m" +
            "olestiae odio placeat possimus repudiandae sint suscipit",
    },
    {
        id:v1(),
        skillName: "Redux",
        skillDescription: "eaque error ipsum libero maxime molestiae odio" +
            " placeat possimus repudiandae sirror ipsum libero maxime m" +
            "olestiae odio placeat possimus repudiandae sint suscipit",
    },
]



export const SkillPage = () => {
    return (
        <div className={s.SkillPage}>
            <TitleText
                title={"What i can"}
                smallTitle={"SKILLS"}
            />
            <div className={`${containerStyle.flexContainer} ${s.blockContainer}`}>

                {state.map(i => {
                    return<div className={s.cards} key={i.id}>
                        <div className={s.cardsImage}>
                            {i.skillName === "React" ? <p><FaReact className={s.icon}/></p> :
                                i.skillName === "JavaScript" ? <p><SiJavascript className={s.icon}/></p> :
                                    i.skillName === "Redux" && <p><SiRedux className={s.icon}/></p>
                            }
                        </div>
                        <p className={s.skillName}>{i.skillName}</p>
                        <p className={s.skillDescription}>{i.skillDescription} </p>
                        <div className={s.cardsFooter}>
                            <p>Read more</p>
                            <p><AiOutlineRight/></p>
                        </div>
                    </div>
                })}

            </div>

        </div>


    )
}


