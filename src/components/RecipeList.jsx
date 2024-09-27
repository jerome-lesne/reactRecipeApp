import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipeData }) => {
    return (
        <div>
            {recipeData.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                />
            ))}
        </div>
    );
};
