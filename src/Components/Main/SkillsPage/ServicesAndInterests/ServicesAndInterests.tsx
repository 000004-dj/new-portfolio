import s from "./ServicesAndInterests.module.css";
import React from "react";
import {Services} from "./Services/Services";
import {Interests} from "./Interests/Interests";

export const ServicesAndInterests = () => {
    return (
        <div className={s.ServicesAndInterests}>
            <Services/>
            <Interests/>
        </div>
    )
}

