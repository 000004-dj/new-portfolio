import s from "./TitleWithLine.module.css";
import React from "react";

type PropsType = {
    title: string
}

export const TitleWithLine = (props: PropsType) => {
    return (
        <>
            <div className={s.lineDiv}>
                <span className={s.aboutMeTitle}>{props.title}</span>
                <span className={s.line}></span>
            </div>
        </>
    )
}