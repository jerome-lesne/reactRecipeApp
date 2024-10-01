import { Search } from "./components/Search";
import { useState } from "react";
import { Nav } from "./components/Nav";
import "./App.css";
import { RecipeContainer } from "./components/RecipeContainer";
import { RecipeList } from "./components/RecipeList";
import { RecipeDetail } from "./components/RecipeDetail";

function App() {
    const [recipeData, setRecipeData] = useState([]);
    const [recipeId, setRecipeId] = useState("");
    return (
        <div className="App">
            <Nav />
            <Search recipeData={recipeData} setRecipeData={setRecipeData} />
            <RecipeContainer>
                <RecipeList recipeData={recipeData} setRecipeId={setRecipeId} />
                <RecipeDetail />
            </RecipeContainer>
        </div>
    );
}

export default App;
