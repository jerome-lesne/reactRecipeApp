import { Search } from "./components/Search";
import { RecipeList } from "./components/RecipeList";
import { useState } from "react";

function App() {
    const [recipeData, setRecipeData] = useState([]);
    return (
        <div className="App">
            <Search recipeData={recipeData} setRecipeData={setRecipeData} />
            <RecipeList recipeData={recipeData} />
        </div>
    );
}

export default App;
