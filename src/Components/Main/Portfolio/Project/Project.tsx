import React from "react";
import s from "./Project.module.scss";
import containerStyle from "../../../../containerStyle.module.scss"

const state = [
    {
        image: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
        title: "To-Do List",
        description: "Project from mega-cool developer"
    },
    {
        image: "https://psmm.pl/wp-content/uploads/2021/07/3-zasieg-social-media-jak-go-zmierzyc-scaled.jpeg",
        title: "Social Media",
        description: "Best Social media ever"
    },
    {
        image: "https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png",
        title: "To-Do List",
        description: "Project from mega-cool developer"
    },

]

export const Project = () => {
    return (
            <div className={`${containerStyle.flexContainer} ${s.blockContainer}`}>
                {state.map(i => {
                    return <div className={s.cardContainer}>
                        <p className={s.title}>{i.title}</p>
                        <p className={s.description}>{i.description}</p>
                        <div className={s.image} style={{backgroundImage: `url(${i.image})`}} ></div>
                    </div>
                })}
            </div>
    )
}