import React from "react"
import Img from "gatsby-image"
import Styles from "./information.module.css"

export default function ImageButton({fixed, link}) {
    return (
    <a href={link} style={{backgroundImage: "none"}}>
        <button className={Styles.imageButton}>
            <div className={Styles.imageContainer}>
                <Img fixed={fixed} className={Styles.img}/>
            </div>
        </button>
    </a>
    )
}