import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_API_KEY;

export const Search = ({ recipeData, setRecipeData }) => {
    const [query, setQuery] = useState("pizza");
    useEffect(() => {
        const fetchRecipe = async () => {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            setRecipeData(data.results);
        };
        fetchRecipe();
    }, [query]);
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
};
