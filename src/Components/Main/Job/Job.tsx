import React from "react";
import s from "./Job.module.css"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {CustomButton} from "../../additionaly-components/CustomButton/CustomButtom";
import { IoReturnUpForward } from "react-icons/io5";
import image from "../../../assets/images/jobPageImage.jpg"

export const Job = () => {
    return (
        <div className={s.Job}>
            <div className={s.jobContainer}>

                <TitleText
                    title={"Looking into remote work options"}
                    smallTitle={"call to action"}
                />
                <CustomButton
                    buttonTitle={"here me"}
                    design={"dark"}
                    buttonIcon={<IoReturnUpForward/>}
                />
            </div>
            <div className={s.imageBlock} style={{backgroundImage: `url(${image})`}}></div>
        </div>
    )
}