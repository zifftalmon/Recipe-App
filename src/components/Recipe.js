const Recipe = () => {

    const getRecipe = async() => {
        const call = await fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2')
        const res = await call.json()
        console.log(res);
    }
    getRecipe()

    return (
        <div>

        </div>
    )
}

export default Recipe