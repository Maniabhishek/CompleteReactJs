import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./Navbar"
import Footer from "./footer"
import HeroSection from "./HeroSection"
import FeatureSection from './FeatureSection'
import CardSection from './CardSection'

const App = () => {
    return (
        <div>
            
            <Navbar/>
            
            <HeroSection/>
            <FeatureSection/>
            <div className="container">
                <div className="row mt-4 mb-4">
                    
                    <div className="col-md-4"> <CardSection title='First Card' imgURL="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                    <div className="col-md-4"> <CardSection title='Second Card' imgURL='https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/></div>
                    <div className="col-md-4"> <CardSection title='Third Card' imgURL='https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/></div>
            
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default App;