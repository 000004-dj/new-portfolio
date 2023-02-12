import React from "react";
import s from "./Job.module.css"
import {TitleText} from "../../additionaly-components/TitleText";
import {Button} from "@mui/material";

export const Job = () => {
    return (
        <div className={s.Job}>
            <div className={s.jobContainer}>
                {/*<h2 className={s.title}>Looking into remote work options</h2>*/}
                <TitleText title={"Looking into remote work options"}/>
                <Button
                    className={s.contactButton}
                    sx={{backgroundColor: "white", color: "black"}}
                    size={"large"}
                    variant="contained"
                >HERE ME</Button>
            </div>
        </div>
    )
}