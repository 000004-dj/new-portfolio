import React from "react";
import s from "./Contact.module.css"
import {TitleWithLine} from "../../additionaly-components/TitleWithLine";
import {Button} from "@mui/material";

export const Contact = () => {
    return (
        <>
            <br/>
            <TitleWithLine title={"CONTACT ME"}/>
            <br/>
            <div className={s.Contact}>
                <div className={s.container}>
                    <input type="text" placeholder={"Your Email"}/>
                    <input type="text" placeholder={"Your telephone number"}/>
                    <textarea placeholder={"Your massage"}></textarea>
                    <br/>
                    <Button
                        sx={{backgroundColor: "white", color: "black"}}
                        size={"large"}
                        variant="contained"
                    >CONTACT</Button>
                </div>
            </div>
        </>
    )
}