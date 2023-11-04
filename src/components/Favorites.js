import { useEffect, useState } from "react"

const Favorites = () => {
    const [list, setList] = useState(['chicken'])

    useEffect(() => { 
        const getFav = async() => {
            const call = await fetch('http://localhost:3001/recipes')
            const res = await call.json()
            console.log(res);
        }
        getFav()
    },[])


    return (
        <div>
            <h1>{list.map(item => item)}</h1>
        </div>
    )
}

export default Favorites