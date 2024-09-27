export const RecipeItem = ({ title, image }) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} />
            <button>View Recipe</button>
        </div>
    );
};
