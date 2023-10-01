import {useState,useEffect} from 'react'
import Search from './Search'

const Recipes = () => {

    const [recipes,setRecipes] = useState([])
    const [id,setId] = useState()
    const [query, setQuery] = useState('chicken')
    


    useEffect(()=>{
        const getRecipe = async() => {
            // const call = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=291adf2def974e05a2e7a225ab807799&ingredients=${query}`)
            const call = await fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=291adf2def974e05a2e7a225ab807799&number=10&query=${query}`)
            const res = await call.json()
            setRecipes(res)
        }
        getRecipe()
    },[query])
    

    const showId = async(e) => {
        const call = await fetch(`https://api.spoonacular.com/recipes/${e.target.id}/analyzedInstructions?apiKey=291adf2def974e05a2e7a225ab807799`)
        const newCall = await fetch(`https://api.spoonacular.com/recipes/${e.target.id}/ingredientWidget.json?apiKey=291adf2def974e05a2e7a225ab807799`)
        const newRes = await newCall.json()
        const res = await call.json()
        console.log(res,newRes);
    }

    const getQuery = (e) => {
        e.preventDefault()
        setQuery(e.target[0].value);
    }


    if(recipes.length == 0 && query.length >= 1) {
        return (
            <div>
                <div className='search-div'>
                    <form onSubmit={getQuery}>
                        <input type='text' placeholder="chicken"/>
                        <button type='submit'>search</button>
                    </form>
                </div>
                <h1>we couldnt find a recipe</h1>
            </div>
        )
    } else if (query.length == 0) {
        console.log('two');
        return (
            <div>
                <h1>please enter an ingredient or letter</h1>
            </div>
        )
    }
    console.log(query);
    console.log(recipes);

    return (        
        <div>
            {/* <Search query={query}/> */}
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
                                {/* <img alt='Dish-Photo'src={item.image}></img> */}
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