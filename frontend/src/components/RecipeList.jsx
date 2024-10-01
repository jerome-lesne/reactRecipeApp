import styles from "./RecipeList.module.css";
import { RecipeItem } from "./RecipeItem";

export const RecipeList = ({ recipeData, setRecipeId }) => {
    return (
        <div className={styles.recipeList}>
            {recipeData.map((recipe) => (
                <RecipeItem
                    key={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    id={recipe.id}
                    setRecipeId={setRecipeId}
                />
            ))}
        </div>
    );
};
