import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, filterByType, filterByAtributte} from "../../actions/index"
import styles from "./Filters.module.css"

export default function Filters({refreshFilter}) {

    const dispatch = useDispatch();
    const allTypes = useSelector((state) => state.types)

    useEffect (() => {
        dispatch(getTypes())
    }, [dispatch])


    function handleFilterByType (e) {
        dispatch(filterByType(e.target.value))
        refreshFilter()
    }

    function handleFilterByAtributte (e) {
        dispatch(filterByAtributte(e.target.value))
        refreshFilter(e.target.value)
    }

    return (
        <div className={styles.allfilters}>
            <h3>Order by:</h3>
            <span>Attributes: <select className={styles.pepito} onChange={e => handleFilterByAtributte(e)}>
                <option value="no">None</option>
                <option value="weight">Weight</option>
                <option value="height">Height</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
                <option value="speed">Speed</option>
                <option value="hp">HP</option>
            </select></span>
            <span>Type: <select onChange={e => handleFilterByType(e)}>
                <option value="all">All types</option>
                {allTypes.map((t) => (
                    <option key={t.name} value={t.name}>{t.name}</option>
                ))}
            </select></span>
    </div>
    )
}





