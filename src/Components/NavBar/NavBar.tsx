import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";
import {Contact} from "../Main/Contact/Contact";

export const NavBar = () => {
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