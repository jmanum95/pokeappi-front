import React from "react";
import { useState } from "react";
import styles from "./Pages.module.css";

export default function Pages({ pokemonsPerPage, allPokemons, pages }) {
  const pageNumbers = [];
  const [pageNum, SetPageNum] = useState(1);

  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className={styles.list}>
        <li key="back">
          <p
            onClick={() => {
              if (pageNum > 1) pages(pageNum - 1);
              if (pageNum > 1) SetPageNum(pageNum - 1);
            }}
            className={styles.backorforw}
          >
            ← Prev
          </p>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <p
                onClick={() => {
                  pages(number);
                  SetPageNum(number);
                }}
                className={
                  pageNum === number
                    ? styles.active
                    : pageNum === number + 1 || pageNum === number - 1
                    ? styles.side
                    : styles.inactive
                }
              >
                {number}
              </p>
            </li>
          ))}
        <li key="forw">
          <p
            onClick={() => {
              if (pageNum < pageNumbers.length) pages(pageNum + 1);
              if (pageNum < pageNumbers.length) SetPageNum(pageNum + 1);
            }}
            className={styles.backorforw}
          >
            Next →
          </p>
        </li>
      </ul>
    </>
  );
}
