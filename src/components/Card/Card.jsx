import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import sword from "../../assets/sword.png";
import shield from "../../assets/shield.png";

export default function Card(props) {
  return (
    <Link to={"/home/pokemons/" + props.id}>
      <div className={styles.card}>
        <h2>{props.name[0].toUpperCase() + props.name.slice(1)}</h2>
        <img className={styles.img} src={props.img} alt="📸 not found" />
        <h4>Type: {props.type.join(", ")}</h4>
        <div className={styles.attordeffdiv}>
          <img className={styles.attordef} src={sword} alt="📸 not found" />
          {props.attack}
        </div>
        <div className={styles.attordeffdiv}>
          <img className={styles.attordef} src={shield} alt="📸 not found" />
          {props.defense}
        </div>
      </div>
    </Link>
  );
}
