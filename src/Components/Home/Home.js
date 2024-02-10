import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    const [count,setCount] = useState(0)
    const handleDecrement = () => {
        setCount(count-1)
    }

    const handleIncrement = () => {
        setCount(count+1)
    }
    const handleReset = () => {
        setCount(0)
    }

  return (
    <div>
        <div>
            
            
        </div>  
        <div>
            <h1 style={{fontSize : "50px", fontWeight: 'bold', color:'yellow', backgroundColor:"darkblue"}}>click to Count : {count}</h1>

            <div>
            <button className='btn btn-success' style={{marginRight : 10}} onClick={handleIncrement}>Increment</button>
            <button className='btn btn-dark' onClick={handleReset}>Reset</button>
            <button className='btn btn-danger' style={{marginLeft:10}} onClick={handleDecrement}>Decrement</button>

            <ol>
                <li><Link to = "/podcasts">Podcasts </Link></li>
                <li>Podcasts</li>
                <li>Products</li>
                <li>Podcasts</li>
                <li>Podcasts</li>
                <li>Podcasts</li>
            </ol>
        </div>
    </div>  
         
    </div>
  )
}

export default Home