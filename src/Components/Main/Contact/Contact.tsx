import React from "react";
import s from "./Contact.module.scss"
import {TitleText} from "../../additionaly-components/TitleText/TitleText";
import {CustomButton} from "../../additionaly-components/CustomButton/CustomButtom";

export const Contact = () => {
    return (
        <>
            <br/>
            <TitleText
                title={"get in touch"}
                smallTitle={"CONTACT ME"}
            />
            <br/>
            <div className={s.Contact}>
                <form className={s.container}>
                        <input type="text" placeholder={"Your Email"}/>
                        <input type="text" placeholder={"Your telephone number"}/>
                        <textarea placeholder={"Your massage"}></textarea>
                        <br/>
                        <CustomButton
                            buttonTitle={"CONTACT"}
                            design={"light"}
                        />
                </form>
            </div>
        </>
    )
}