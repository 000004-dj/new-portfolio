import React from "react";
import s from "./Contact.module.css"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {CustomButton} from "../../additionaly-components/button/CustomButtom";

export const Contact = () => {
    return (
        <>
            <br/>
            <TitleText title={"CONTACT ME"}/>
            <br/>
            <div className={s.Contact}>
                <div className={s.container}>
                    <input type="text" placeholder={"Your Email"}/>
                    <input type="text" placeholder={"Your telephone number"}/>
                    <textarea placeholder={"Your massage"}></textarea>
                    <br/>
                    <CustomButton
                        buttonTitle={"CONTACT"}
                        design={"light"}
                    />
                </div>
            </div>
        </>
    )
}