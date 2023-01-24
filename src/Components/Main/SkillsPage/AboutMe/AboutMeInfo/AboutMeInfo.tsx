import s from "./AboutMeInfo.module.css";
import React from "react";


// type PropsType = {
//     state: StateType[]
// }
// type StateType = {
//     title: string
//     text: string
// }

const state  = [
{title:"Name", text: "Samuil Prytchyn"},
{title:"Address", text: "Modra street, Poland, Gdansk"},
{title:"Study", text: "IT-Incubator"},
{title:"Mail", text: "samuil-18@tut.by"},
{title:"Phone", text: "+48 731 380 234"},
]

export const AboutMeInfo = () => {
    return (
        <div className={s.aboutMeInfo}>
            {state.map(i => {
               return <div><b>{i.title}:</b> {i.text}</div>
                }
            )}
        </div>
    )
}