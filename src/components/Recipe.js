const Recipe = () => {

    const getRecipe = async() => {
        const call = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=apples`)
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