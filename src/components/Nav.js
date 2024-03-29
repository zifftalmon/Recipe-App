import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className='nav'>
            <Link style={{textDecoration:'none', color:'black'}} to='/'>
            <h1>recipes</h1>
            </Link>
            <ul>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/recipes'>Recipes</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/favorites'>Favorites</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/about'>About us</Link></li>
            </ul>
        </div>
    )
}

export default Nav