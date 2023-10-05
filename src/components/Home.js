import { useEffect, useState } from "react"

const Home = () => {

    const [ranRecipe,setRanRacipe] = useState([])

useEffect(() => {
    const randomRecipe = async() => {
        const call = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=291adf2def974e05a2e7a225ab807799&number=3&tags=vegetarian`)
        const res = await call.json()
        setRanRacipe(res.recipes)
    }
    randomRecipe()
},[])

console.log(ranRecipe);

    return (
        <>
        <div className="home-div">
                {/* <img src='pasta.jpg'></img> */}
                <h1>
                    Home
                </h1>
                <div>
                    <h2>
                        Welcome!
                        Our Website offers thounsands of recipes from cool fruit sald to warm and comforting chicken soup!
                        We invite to join sign up and enjoy the most from our website!
                        Happy cooking!
                    </h2>
                </div>
            </div>
        <div className="home-recipes">
        {
            ranRecipe.map((item,i) => {
                return(
                <div className="ran-recipes">
                    <div>
                        <h3>{item.title}</h3>
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