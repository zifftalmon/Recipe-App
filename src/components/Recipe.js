import {useState,useEffect} from 'react'

const Recipe = () => {

    
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
        setId(e.target.id)
        const call = await fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
        const res = await call.json()
        console.log(res);
    }

    return (
        <div className='recipesDiv'>
            {
                recipes.map((item,i) => {
                    return(
                        <div id='recipe' className={`recipe${i}`} key={i}>
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

export default Recipe