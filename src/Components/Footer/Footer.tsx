import React from "react";
import s from "./Footer.module.css"


export const Footer = () => {
    return (
        <div className={s.Footer}>
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
        </div>
    )
}