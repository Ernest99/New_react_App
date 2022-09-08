import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import '../../Pages/Home/home.css'
import { Images } from '../../data'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="section container">
        <h1>We make customer <br /> data simple..</h1>
        <div className='flex_container'>
            {
                Images.map(({id, img}) =>{
                    return(
                        <div key={id} className='box'>
                            <img src={img} alt="pic" />
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Home
