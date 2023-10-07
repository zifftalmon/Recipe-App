import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"


const Recipe = () => {
    const {id} = useParams();
    const {title} = useParams();
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
    console.log(ingredients,recipe);
    console.log(title);
    if(ingredients.length == 0 || recipe.length == 0) {
        return (
            <div>
                <h1>recipe not found</h1>
            </div>
        )
    }
    return (
        <>
        <button>
            <Link style={{textDecoration:'none', color:'black'}} to='/recipes'>back to recipes</Link>    
        </button>
        {recipe.length == 0 || ingredients.length == 0 ? <div><h1>recipe not found</h1></div>:
        <div>
            <h1>{title}</h1>
            <div className="ingredients-container">
                {ingredients.map((item,i) => {
                    return(
                        <>
                        <div className="ingredients-div" key={i}>
                            <ul> 
                                <h3>
                                    <li>
                                        <input type="checkbox"/>{item.amount.us.value} {item.amount.us.unit} / {item.amount.metric.value} {item.amount.metric.unit} {item.name}
                                    </li>
                                </h3>
                            </ul>
                        </div>
                        </>
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
        }
        </>
    )
}

export default Recipe