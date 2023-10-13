import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ingredientsjson from '../JSON/ingredients.json'
import instruction from '../JSON/instructions.json'
import equipmentjson from '../JSON/equipment.json'
import information from '../JSON/info.json'


const Recipe = () => {
    const {id} = useParams();
    const {title} = useParams();
    const [recipe,setRecipe] = useState([])
    const [ingredients,setIngredients] = useState([])
    const [equipment,setEquipment] = useState([])
    const [info,setInfo] = useState([])
    const [details,setDetails] = useState([])
    const [icon,setIcon] = useState('icons8-heart-50.png')

    useEffect(() => {
        fetch(`/recipes/${id}`)
        .then(res => res.json())
        .then(data => data.map(item => {return setDetails(rec => [...rec,item])}))


        const getdetails = async() => {
            // const call = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
            // const ingCall = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=291adf2def974e05a2e7a225ab807799`)
            // const equCall = await fetch(`https://api.spoonacular.com/recipes/${id}/equipmentWidget.json?apiKey=291adf2def974e05a2e7a225ab807799`)
            // const infoCall = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=291adf2def974e05a2e7a225ab807799`)
            // const newRes = await ingCall.json()
            // const res = await call.json()
            setRecipe(instruction.instruction[0].steps)
            setIngredients(ingredientsjson.ingredients)
            setEquipment(equipmentjson.equipment)
            setInfo(information.information)
        }
        getdetails()
    },[])
    if(ingredients.length === 0 || recipe.length === 0) {
        return (
            <div>
                <h1>recipe not found</h1>
            </div>
        )
    }

    const setFavorite = () => {
        setIcon('icons8-heart-black-50.png')
        setTimeout(() => {
            alert('added to favorites')
        },600)
        
        if(icon == 'icons8-heart-black-50.png') {
            setIcon('icons8-heart-50.png')
            setTimeout(() => {
                alert('removed from favorites')
            },600)
        }
    }
    return (
        <>
        <div className="btn-div">
            <Link style={{textDecoration:'none', color:'black'}} to='/recipes'>
                <button className="recipe-btn">
                    back to recipes
                </button>
            </Link>    
            <button className="fav-btn" onClick={setFavorite}>
                Add to Favorites  <img src={icon}/>
            </button>
        </div>
        {recipe.length === 0 || ingredients.length === 0 ? <div><h1>recipe not found</h1></div>:
        <div>
            <h1>{title}</h1>
            <div className="ingredients-container">
                <div className="ingredients-div">
                    <h1><u>ingredients</u></h1>
                    {ingredients.map((item,i) => {
                        return(
                            <>
                            <div key={i}>
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
                <div className="equipment-div">
                    <h1><u>equipment</u></h1>
                    {equipment.map((item, i) => {
                        return (
                            <div key={i}>
                                <ul>
                                    <h2>
                                        <li>
                                            <input type="checkbox"/>{item.name}
                                        </li>
                                    </h2>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="recipe-container">
                {recipe.map((item,i) => {
                    return(
                        <div className="recipe-div" key={i}>
                            <h3>{i+1}.{item.step}</h3>
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