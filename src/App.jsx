import { Search } from "./components/Search";
import { RecipeList } from "./components/RecipeList";
import { useState } from "react";
import { Nav } from "./components/Nav";
import "./App.css";

function App() {
    const [recipeData, setRecipeData] = useState([]);
    return (
        <div className="App">
            <Nav />
            <Search recipeData={recipeData} setRecipeData={setRecipeData} />
            <RecipeList recipeData={recipeData} />
        </div>
    );
}

export default App;
