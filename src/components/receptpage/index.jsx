import React, { useEffect, useState } from 'react';
import style from './index.module.css';

const RecipePage = () => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));
    }, []);

    if (!meal) return <p>Loading...</p>;

    // Extract ingredients and measures
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>{meal.strMeal}</h2>
            <img className={style.foodimg} src={meal.strMealThumb} alt={meal.strMeal} width="300" />
            <p className={style.category}><strong>Category:</strong> {meal.strCategory}</p>
            <p className={style.area}><strong>Area:</strong> {meal.strArea}</p>

            <h3>Ingredients:</h3>
            <ul className={style.ingredients}>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <p className={style.instructions1}><strong>Instructions:</strong></p>
            <p className={style.instructions}>{meal.strInstructions}</p>
        </div>
    );
};

export default RecipePage;
