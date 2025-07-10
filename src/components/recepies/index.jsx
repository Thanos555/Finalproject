import React, { useEffect, useState } from 'react';
import style from './index.module.css'
import logo1 from '../../img/tacorootlogo2.png'
import { Link } from 'react-router-dom';


const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
// const API_Letter = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";


const Recepies = () => {
    const [food, setFood] = useState('');
    const [results, setResults] = useState([]);



    async function getFoodData() {
        const response = await fetch(API)
        const data = await response.json()
        setResults(data.meals || []);
        console.log(data)
    }

    useEffect(() => {
        getFoodData();
    }, []);


    async function handleSearch() {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);
        const data = await response.json();
        setResults(data.meals || []);
        console.log(data);
    };

    return (
        <div className={style.full}>
            <div className={style.logocard}>
                <Link to="/"><img src={logo1} alt="" width={'200px'} height={'200px'}></img></Link>
            </div>
            <p className={style.foodsearch}>Search for food</p>
            <div className={style.search1}>
                <input placeholder='Look for recipes'
                    type="text"
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <div className={style.foods}>
                    {results.length > 0 ? (
                        results.map((meal) => (
                            <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className={style.cardmeal}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} width="254px" />
                                <br />
                                <h3>{meal.strMeal}</h3>
                            </Link>

                        ))
                    ) : (
                        <p className={style.noresult}>No results ❌ </p>
                    )}
                </div>
            </div>
        </div>
    );
};



export default Recepies;
