import s from "./ProgrammingAndLanguages.module.css";
import React from "react";
import {Programming} from "./Programming/Programming";
import {Languages} from "./Languages/Languages";

export const ProgrammingAndLanguages = () => {
    return <div className={s.ProgrammingAndLanguages}>
        <Programming/>
        <Languages/>
    </div>
}


