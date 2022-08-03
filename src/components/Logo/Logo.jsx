import React from "react";
import styles from "./Logo.module.css"

export default function Logo() {
    return (
        <div className={styles.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png"
                alt="📸 not found"
                width="75" height="75"/>
        </div>
    )
}