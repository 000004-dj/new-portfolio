import s from "./HomePage.module.scss";
import containerStyle from "../../../containerStyle.module.scss"
import React from "react";
import photo from "../../../assets/images/photo.png"
import {HomePageTitleText} from "../../additionaly-components/TitleText/HomePageTitle/HomePageTitleText";
import {CustomButton} from "../../additionaly-components/CustomButton/CustomButtom";
import { AiOutlineCloud } from "react-icons/ai";


export const HomePage = () => {
    return <div className={s.HomePage}>

        <div className={`${containerStyle.flexContainer} ${s.blockContainer}`}>
            <div className={s.textBlock}>
                <HomePageTitleText title={"Hi, i am Samuil and i Frontend Developer"}/>
                <CustomButton
                    buttonTitle={"DOWNLOAD CV"}
                    design={"light"}
                    buttonIcon={<AiOutlineCloud/>}
                />
            </div>

            <div className={s.image} style={{backgroundImage: `url(${photo})`}} ></div>

        </div>

    </div>
}