import styles from "./RecipeContainer.module.css";

export const RecipeContainer = ({ children }) => {
    return <div className={styles.recipeContainer}>{children}</div>;
};
