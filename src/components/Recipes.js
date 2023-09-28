import {useState,useEffect} from 'react'

const Recipes = () => {

    const [recipes,setRecipes] = useState([])
    const [id,setId] = useState()
    const [query, setQuery] = useState('chicken')
    

    useEffect(()=>{

        const getRecipe = async() => {
            const call = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=${query}`)
            const res = await call.json()
            console.log(res)
            setRecipes(res)
        }
        getRecipe()
    },[])
    

    const showId = async(e) => {
        const call = await fetch(`https://api.spoonacular.com/recipes/${e.target.id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
        const res = await call.json()
        console.log(res);
    }

    const getQuery = (e) => {
        e.preventDefault()
        setQuery(e.target[0].value);
    }

    return (
        <div>
            <div className='search-div'>
                <form onSubmit={getQuery}>
                    <input type='text' placeholder="chicken"/>
                    <button type='submit'>search</button>
                </form>
            </div>
            <div className='recipes-div'>
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
        </div>
    )
}
// instructions address https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799
//recipe adresss https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=apples

export default Recipes