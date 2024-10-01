import styles from "./RecipeItem.module.css";

export const RecipeItem = ({ title, image }) => {
    return (
        <div className={styles.recipeContainer}>
            <h1 className={styles.recipeTitle}>{title}</h1>
            <img className={styles.recipeImg} src={image} />
            <button className={styles.recipeBtn}>View Recipe</button>
        </div>
    );
};
