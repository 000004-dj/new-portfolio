import React, {useState} from "react";
import s from "./Header.module.css"
import {NavBar} from "../NavBar/NavBar";
import {AiOutlineBars} from "react-icons/ai";
import {NavBarMobile} from "../NavBarMobile/NavBarMobile";

export const Header = () => {
    const [activeMode, setActiveMode] = useState(false)
    const mobileMenuOn = () => {
        setActiveMode(!activeMode)
    }

    const burgerIcon = () => {
        return <div
            style={{fontSize: "30px", zIndex: "999"}}
            className={s.burgerIcon}
            onClick={mobileMenuOn}
        >
            <AiOutlineBars/>
        </div>
    }

    if(activeMode){
        return (<div className={s.navMobileContainer}>
                {burgerIcon()}
                <NavBarMobile/>
            </div>
        )
    }
    return (
        <div className={s.Header}>
            <NavBar/>
            {burgerIcon()}
        </div>
    )
}