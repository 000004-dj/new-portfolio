import s from "./CustomButton.module.css";
import React from "react";

type PropsType = {
    buttonTitle: string
    design: "light" | "dark"
    onClick?: ()=>void
    buttonIcon?: any
}
export const CustomButton = (props: PropsType) => {

    {
        if (props.design === "light") {
            return <div>
                <button
                    className={s.button}
                    onClick={() => {}}
                >
                    {props.buttonTitle} <span className={s.buttonIcon}>{props.buttonIcon}️</span>
                </button>
            </div>
        }

        return (
            <div>
                <button
                    className={s.button}
                    onClick={() => {}}
                    style={{background: "black", color: "white"}}
                >
                    {props.buttonTitle} {props.buttonIcon}️
                </button>
            </div>
        )
    }

}