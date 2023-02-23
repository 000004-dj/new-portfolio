import React from "react";
import s from "./NavBarMobile.module.css"
import {NavLink} from "react-router-dom";

export const NavBarMobile = () => {
    return (
        <div className={s.NavBar}>
            <NavLink to={"/"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>Home</NavLink>
            <NavLink to={"/Skills"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>Skills</NavLink>
            <NavLink to={"/Portfolio"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>Portfolio</NavLink>
            <NavLink to={"/Contact"}
                     className={({isActive}) =>
                         isActive ? s.active : undefined
                     }>Contact</NavLink>

        </div>
    )
}