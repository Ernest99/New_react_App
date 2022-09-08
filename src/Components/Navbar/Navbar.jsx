import React from 'react'
import '../../Components/Navbar/navbar.css'
import { Link } from '../../data'
const Navbar = () => {
  return (
    <div>
        <nav>
            <a href="/" className='logo'>Navbar</a>
            <ul>
                {
                    Link.map(({id,link,path})=>{
                        return(
                            <li key={id}>
                                <a href={path}>{link}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar