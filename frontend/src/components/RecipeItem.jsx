import styles from "./RecipeItem.module.css";

export const RecipeItem = ({ title, image, id, setRecipeId }) => {
    return (
        <div className={styles.recipeContainer}>
            <img className={styles.recipeImg} src={image} />
            <h1 className={styles.recipeTitle}>{title}</h1>
            <button
                onClick={() => {
                    setRecipeId(id);
                }}
                className={styles.recipeBtn}
            >
                View Recipe
            </button>
        </div>
    );
};
