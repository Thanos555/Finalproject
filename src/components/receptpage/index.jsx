import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './index.module.css';

const RecipePage = () => {
    const { id } = useParams(); // получаем id из URL
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Ошибка сети');
                return res.json();
            })
            .then(data => setMeal(data.meals[0]))
            .catch(err => {
                console.error(err);
                setError('Не удалось загрузить рецепт.');
            });
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!meal) return <p>Loading...</p>;

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
