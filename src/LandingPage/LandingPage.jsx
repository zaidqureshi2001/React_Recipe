import React from 'react'
import { useNavigate } from 'react-router-dom'
import './LandingPage.css'
const LandingPage = () => {
    const navigate=useNavigate()
    const navigateParent=()=>{
        navigate('/parent')
    }
  return (
    <div className="landing_container">
        <div className="landing_page">
            <h1>Welcome to Recipe World</h1>
            <p>Click below to enter the world of Cullinary</p>
            <button onClick={()=>navigateParent()}>Recipe World</button>
        </div>
    </div>
  )
}

export default LandingPage
