import React, { useEffect, useState } from 'react';
import style from './index.module.css'
import { useParams, Link } from 'react-router-dom';


const RecipePage = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, [id]);

    if (!meal) return <p>Loading...</p>;

    return (
        <div style={{ padding: '20px' }}>
            <Link to="/recepies">← Back</Link>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <p><strong>Instructions:</strong></p>
            <p className={style.ingredients}>{meal.strInstructions}</p>
        </div>

    );
};

export default RecipePage;
