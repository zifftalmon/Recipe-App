import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"


const Recipe = () => {
    const {id} = useParams();
    const [recipe,setRecipe] = useState([])
    const [ingredients,setIngredients] = useState([])
    const [details,setDetails] = useState([])
    useEffect(() => {
        fetch(`/recipes/${id}`)
        .then(res => res.json())
        .then(data => data.map(item => {return setDetails(rec => [...rec,item])}))


        const getdetails = async() => {
            const call = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
            const newCall = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=291adf2def974e05a2e7a225ab807799`)
            const newRes = await newCall.json()
            const res = await call.json()
            setRecipe(res[0].steps)
            setIngredients(newRes.ingredients)
        }
        getdetails()
    },[])
    return (
        <>
        <button>
            <Link style={{textDecoration:'none', color:'black'}} to='/recipes'>back to recipes</Link>    
        </button>
        <div>
            <div className="ingredients-container">
                {ingredients.map((item,i) => {
                    return(
                        <div className="ingredients-div" key={i}>
                            <ul> 
                                <h1>
                                    <li>
                                        <input type="checkbox"/>{item.name}
                                    </li>
                                </h1>
                            </ul>
                        </div>
                    )
                })}
            </div>
            <hr/>
            <div className="recipe-container">
                {recipe.map((item,i) => {
                    return(
                        <div className="recipe-div" key={i}>
                            <h2>{i+1}.{item.step}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Recipe