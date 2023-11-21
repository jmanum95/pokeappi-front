import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, resetDetails } from "../../redux/actions/index";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import styles from "./DetailedCard.module.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(resetDetails());
    dispatch(getDetail(params.id));
  }, [dispatch]);

  const myPokemon = useSelector((state) => state.detail);

  return (
    <>
      <NavBar />
      {Object.keys(myPokemon).length > 0 ? (
        <div className={styles.detailedcard}>
          <Link to="/home">
            <button className={styles.backbutton}>← Back</button>
          </Link>
          <h1>{myPokemon.name.toUpperCase()}</h1>
          <div className={styles.card}>
            <img
              src={myPokemon.sprite || myPokemon.img}
              alt="📸 not found"
            ></img>
            <div>
              <h2>Weight : {myPokemon.weight}</h2>
              <h2>Height : {myPokemon.height}</h2>
              <h2>Attack: {myPokemon.attack}</h2>
              <h2>Defense: {myPokemon.defense}</h2>
              <h2>Speed: {myPokemon.speed}</h2>
              <h2>HP: {myPokemon.hp}</h2>
            </div>
          </div>
        </div>
      ) : (
        <h1>
          Loading...
          <Logo />
        </h1>
      )}
    </>
  );
}
