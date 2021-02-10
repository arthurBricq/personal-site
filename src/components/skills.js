import React from "react"
import styles from "./skills.module.css"

export default function Skills({name, skill}) {

    const listItems = skill.map((item, index) => {
        return (
            <li key={index} className={styles.listItem}>
                <p style={{fontWeight: "bold", fontSize: 25 }}>{item[0]}</p>
                <p>{item[1]}</p>
            </li>
        )
    })

    console.log(styles)

    return (
        <div className={styles.container}>
            <h2 style={{marginTop: "9px"}}>{name}</h2>
            <p></p>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}