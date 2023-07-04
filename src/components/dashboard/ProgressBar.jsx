import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [meal, setMeal] = useState({
    calories: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeal((prevMeal) => ({ ...prevMeal, [name]: value }));
  };

  const calculatePercentage = (value, total) => {
    const percentage = (value / total) * 100;
    return isNaN(percentage) ? 0 : Math.round(percentage);
  };

  const totalNutrition =
    meal.calories + meal.protein + meal.fat + meal.carbohydrates;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meal Nutrition Tracker</h1>

      <div className="mb-4">
        <label className="block font-semibold">Calories</label>
        <input
          type="number"
          name="calories"
          value={meal.calories}
          onChange={handleChange}
          className="w-full py-1 px-2 rounded border-gray-300"
        />
        <div className="bg-gray-200 rounded h-4 mt-2">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${calculatePercentage(meal.calories, 400)}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Protein</label>
        <input
          type="number"
          name="protein"
          value={meal.protein}
          onChange={handleChange}
          className="w-full py-1 px-2 rounded border-gray-300"
        />
        <div className="bg-gray-200 rounded h-4 mt-2">
          <div
            className="bg-green-500 h-full"
            style={{ width: `${calculatePercentage(meal.protein, 100)}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Fat</label>
        <input
          type="number"
          name="fat"
          value={meal.fat}
          onChange={handleChange}
          className="w-full py-1 px-2 rounded border-gray-300"
        />
        <div className="bg-gray-200 rounded h-4 mt-2">
          <div
            className="bg-yellow-500 h-full"
            style={{ width: `${calculatePercentage(meal.fat, 70)}%` }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Carbohydrates</label>
        <input
          type="number"
          name="carbohydrates"
          value={meal.carbohydrates}
          onChange={handleChange}
          className="w-full py-1 px-2 rounded border-gray-300"
        />
        <div className="bg-gray-200 rounded h-4 mt-2">
          <div
            className="bg-red-500 h-full"
            style={{
              width: `${calculatePercentage(meal.carbohydrates, 200)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
