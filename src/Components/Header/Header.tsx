import React, {useState} from "react";
import s from "./Header.module.scss"
import {NavBar} from "./NavBar/NavBar";
import {AiOutlineBars} from "react-icons/ai";
import {NavBarMobile} from "./NavBar/NavBarMobile/NavBarMobile";

export const Header = () => {
    const [activeMode, setActiveMode] = useState(false)
    const mobileMenuOn = () => {
        setActiveMode(!activeMode)
    }

    const burgerIcon = () => {
        return (
            <div className={`${s.burgerIconContainer} burgerIconContainer`}>
                <AiOutlineBars style={{fontSize: "30px", zIndex: "99"}}
                               className={s.burgerIcon}
                               onClick={mobileMenuOn}/>
            </div>
        )

    }

    if (activeMode) {
        return (
            <>
                {burgerIcon()}
            <div className={s.navMobileContainer}>
                <NavBarMobile/>
            </div>
            </>
        )
    }

    return (
        <div className={s.Header}>
            <NavBar/>
            {burgerIcon()}
        </div>
    )
}