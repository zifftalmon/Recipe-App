import {useState,useEffect} from 'react'
import Search from './Search'

const Recipes = () => {

    
    useEffect(()=>{
        const getRecipe = async() => {
            const call = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=apples`)
            const res = await call.json()
            console.log(res)
            setRecipes(res)
        }
        getRecipe()
    },[])
    
    const [recipes,setRecipes] = useState([])
    const [id,setId] = useState()

    const showId = async(e) => {
        const call = await fetch(`https://api.spoonacular.com/recipes/${e.target.id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
        const res = await call.json()
        console.log(res);
    }

    return (
        <div className='recipes-div'>
            <div>
                <Search/>
            </div>
            <br/>
            {
                recipes.map((item,i) => {
                    return(
                        <div id='recipe' className={`recipe${i}`} key={i} onClick={showId}>
                            <h1 id={item.id} 
                            onClick={(e) =>
                                setId(e.target.id)
                            }>
                            {item.title}
                            </h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
// instructions address https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799
//recipe adresss https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=apples

export default Recipes