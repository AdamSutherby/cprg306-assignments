'use client';

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [mealIdeas, setMealIdeas] = useState([]);

    async function loadMealIdeas() {
        if (ingredient) {
            console.log('Ingredient:', ingredient);
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMealIdeas(mealIdeas);
        }
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
        console.log('Ingredient:', ingredient);
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '')}`;
        console.log('API URL:', url);
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
    }
}


