import s from "./CustomButton.module.scss";
import React from "react";

type PropsType = {
    buttonTitle: string
    design: "light" | "dark"
    onClick?: ()=>void
    buttonIcon?: any
}
export const CustomButton = (props: PropsType) => {
    const customButton = () => {
        return  <button
                    className={s.button}
                    onClick={() => {}}
                    style={props.design === "dark" ? {background: "black", color: "white"} : {}}
                >
                    {props.buttonTitle} {props.buttonIcon}️
                </button>

    }
    return (
        <div>
            {customButton()}
        </div>
    )

}