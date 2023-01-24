import React from "react";
import s from "./Main.module.css"
import photo from "../../assets/images/Photo.jpg"
import {SkillPage} from "./SkillsPage/SkillPage";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import {Portfolio} from "./Portfolio/Portfolio";
import {Contact} from "./Contact/Contact";


export const Main = () => {
    return (
        <div className={s.Main}>
            <div className={s.imageParent} style={{backgroundImage:`url(${photo})` }}></div>
            <div className={s.infoBlock}>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/Skills"} element={<SkillPage/>}/>
                        <Route path={"/Portfolio"} element={<Portfolio/>}/>
                        <Route path={"/Contact"} element={<Contact/>}/>
                    </Routes>
            </div>
        </div>
    )
}






