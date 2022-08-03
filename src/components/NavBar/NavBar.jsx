import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.css"

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.linkdiv}>
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
            <div className={styles.linkdiv}>
                <Link to="/home">
                    Home
                </Link>
            </div>
            <div className={styles.linkdiv}>
                <Link to="/home/pokedex">
                    Pokedex
                </Link>
            </div>
            <div className={styles.linkdiv}>
                <Link to="/home/create">
                    Create your pokemon   
                </Link>
            </div>
        </div>
    )
}
