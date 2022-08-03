import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import {getPokemons} from "../../actions/index"
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import styles from "./landingPage.module.css"

export default function LandingPage(){

    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getPokemons())
    }, [dispatch])


    return (
        <div className={styles.landing}>
            <h1>POKE-APP</h1>
            <Link to="/home">
                <div className={styles.logo}>
                    <Logo/>
                </div>
            </Link>
        </div>
    )
}