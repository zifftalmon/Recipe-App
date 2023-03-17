import {useState,useEffect} from 'react'

const Recipe = () => {

    useEffect(()=>{
        const getRecipe = async() => {
            const call = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=apples`)
            const res = await call.json()
            setRecipes([res])
        }
        getRecipe()
    },[])

    const [recipes,setRecipes] = useState([])

    return (
        <div>
            {
                recipes.map((item,i) => {
                    return(
                        <div key={i}>

                        </div>
                    )
                })
            }
        </div>
    )
}
//instructions address https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799
//recipe adresss https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=apples

export default Recipe