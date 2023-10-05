import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const Recipe = () => {
    const {id} = useParams();
    const [details, setDetails] = ([])
    const [recipe,setRecipe] = ([])
    const [ingredients,setIngredients] = ([])

    useEffect(() => {
        fetch(`/recipes/${id}`)
        .then(res => res.json())
        .then(data => data.map(item => {return setDetails(rec => [...rec,item])}))


        const getdetails = async() => {
            const call = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
            const newCall = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=291adf2def974e05a2e7a225ab807799`)
            const newRes = await newCall.json()
            const res = await call.json()
            setRecipe(res)
            setIngredients(newRes)
            console.log(res,newRes);
        }
        getdetails()
    })

    return (
        <div>
            {recipe.map((item,i) => {
                console.log(item);
                return(
                    <div>
                        <h1>{item}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Recipe