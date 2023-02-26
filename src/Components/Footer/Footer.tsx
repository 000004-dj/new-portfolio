import React from "react";
import s from "./Footer.module.scss"


export const Footer = () => {
    return (
        <div className={s.container}>
            <div className={s.name}>
                <span>Samuil Prytchyn</span>
            </div>
            <div className={s.social}>
                <ul>
                    <li><a href="#">
                        <img className="svg"
                             src="https://cavani-react.vercel.app/img/svg/social/facebook.svg" alt=""/></a>
                    </li>
                    <li><a href="#">
                        <img className="svg"
                             src="https://cavani-react.vercel.app/img/svg/social/twitter.svg" alt=""/></a>
                    </li>
                    <li><a href="#">
                        <img className="svg"
                             src="https://cavani-react.vercel.app/img/svg/social/instagram.svg" alt=""/></a>
                    </li>
                    <li><a href="#">
                        <img className="svg"
                             src="https://cavani-react.vercel.app/img/svg/social/dribbble.svg" alt=""/></a>
                    </li>
                    <li><a href="#">
                        <img className="svg"
                             src="https://cavani-react.vercel.app/img/svg/social/tik-tok.svg" alt=""/></a>
                    </li>
                </ul>
            </div>

            <div className={s.description}>
                <span>
                All rights reserved
                </span>
            </div>
        </div>
    )
}