import React, { useEffect, useState } from 'react';
import style from './index.module.css';
import foto1 from '../../img/tacorootlogo2.png'
import { Link } from 'react-router-dom';

const areas = [
    "American", "British", "Canadian", "Chinese", "Croatian", "Dutch",
    "Egyptian", "Filipino", "French", "Greek", "Indian", "Irish", "Italian",
    "Jamaican", "Japanese", "Kenyan", "Malaysian", "Mexican", "Moroccan",
    "Polish", "Portuguese", "Russian", "Spanish", "Thai", "Tunisian",
    "Turkish", "Ukrainian", "Uruguayan", "Vietnamese"
];

const Regions = () => {
    const [results, setResults] = useState([]);
    const [selectedArea, setSelectedArea] = useState('All Areas');

    async function fetchAllAreas() {
        const promises = areas.map(area =>
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`).then(res => res.json())
        );
        const allData = await Promise.all(promises);
        const combinedMeals = allData.reduce((acc, curr) => {
            if (curr.meals) return acc.concat(curr.meals);
            return acc;
        }, []);
        setResults(combinedMeals);
        console.log('All areas combined', combinedMeals);
    }

    async function fetchMealsByArea(area) {
        if (area === 'All Areas') {
            fetchAllAreas();
        } else {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
            const data = await response.json();
            setResults(data.meals || []);
            console.log(data);
        }
    }

    useEffect(() => {
        fetchAllAreas();
    }, []);

    useEffect(() => {
        if (selectedArea !== 'All Areas') {
            fetchMealsByArea(selectedArea);
        }
    }, [selectedArea]);

    return (
        <div>
            <div className={style.recepielink}>
                <Link to='/'><img className={style.foto1} src={foto1} alt="" /></Link>
                <p>Want some recipes?  <Link to='/recepies'><button className={style.recepbtn}>Click for Recepies</button></Link></p>
            </div>
            <div className={style.areaButtons}>
                <div
                    onClick={() => {
                        setSelectedArea('All Areas');
                        fetchAllAreas();
                    }}
                    className={style.box}>
                    All Areas
                </div>

                {areas.map(area => (
                    <div key={area} onClick={() => setSelectedArea(area)} className={style.box}>
                        {area}
                    </div>
                ))}
            </div>

            <div className={style.mealsContainer}>
                {results.map(meal => (
                    <div key={meal.idMeal} className={style.mealCard}>
                            <Link to={`/recipe/${meal.idMeal}`} key={meal.idMeal} className={style.mealCard}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} width="254px" />
                                <br />
                                <h3>{meal.strMeal}</h3>
                            </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Regions;
