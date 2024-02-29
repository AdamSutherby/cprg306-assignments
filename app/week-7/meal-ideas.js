'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas(ingredient) {
    const [mealIdeas, setMealIdeas] = useState([]);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMealIdeas(mealIdeas);
    }
        

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
            {mealIdeas && mealIdeas.map((meal) => (
    <li key={meal.idMeal}>{meal.strMeal}</li>
))}
            </ul>
        </div>
    );
}

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}')
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
    }
}