import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className='nav'>
            <h1>recipes</h1>
            <ul>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/'>Home</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/search'>Search</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/favorites'>Favorites</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/recipe-of-the-day'>Recipe of the Day</Link></li>
            <li><Link style={{textDecoration:'none', color:'black'}} to='/about'>About us</Link></li>
            </ul>
        </div>
    )
}

export default Nav