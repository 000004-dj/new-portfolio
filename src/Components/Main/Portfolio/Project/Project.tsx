import React from "react";
import s from "./Project.module.css";

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
    {
        image: "https://psmm.pl/wp-content/uploads/2021/07/3-zasieg-social-media-jak-go-zmierzyc-scaled.jpeg",
        title: "Social Media",
        description: "Best Social media ever"
    },

]

export const Project = () => {
    return (
        <>
            <div className={s.AlbumParent}>
                {state.map(i => {
                    return <div className={s.ImageBlockContainer}>

                        <div className={s.itemImageBlock} style={{backgroundImage: `url(${i.image})`}}>
                            <a href="#" className={s.followButton}>Follow</a>
                        </div>
                        <p>{i.title}</p>
                        <p>{i.description}</p>

                    </div>
                })}
            </div>

        </>

    )
}