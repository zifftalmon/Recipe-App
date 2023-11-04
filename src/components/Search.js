import Recipes from "./Recipes"

const Search = (props) => {
    return (
        <div>
            <h1>
                {props.query}
            </h1>
        </div>
    )
}

export default Search