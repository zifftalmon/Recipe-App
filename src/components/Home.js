import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import recipes from '../JSON/randomrecipe.json'

const Home = (props) => {

// variable to store random racipes
const [ranRecipe,setRanRacipe] = useState([])

// function for fetching random recipes
useEffect(() => {
    const randomRecipe = async() => {
        // const call = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${props.pass}&number=3&tags=vegetarian`)
        // const res = await call.json()
        setRanRacipe(recipes.recipes)
    }
    randomRecipe()
},[])

    return (
        <>
        <div className="home-div">
                <h1>
                    Home
                </h1>
                <div>
                    <h2>
                        Welcome!
                        Our Website offers thounsands of recipes from cool fruit salad to warm and comforting chicken soup!
                        We invite to join sign up and enjoy the most from our website!
                        Happy cooking!
                    </h2>
                </div>
            </div>
        <div className="home-recipes">
            {/* mappin through ranRecipe and displaying (need to add links) */}
        {
            ranRecipe.map((item,i) => {
                return(
                <div className="ran-recipes" key={i}>
                    <div>
                    <Link style={{textDecoration:'none', color:'black'}} to={`/recipes/${item.id}/${item.title}`}>
                        <h3>{item.title}</h3>
                    </Link>
                    </div>
                </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Home