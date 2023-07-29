import React from 'react';
import '../App.css';
import './About.css';
import { Link } from 'react-router-dom';

// reference: https://aurora.tech/

function Home(){
    return(
        <div>
        <div className='first-container'>
            <h1>
                Cleansing the world of cracked concrete.
            </h1>
        </div>

        <div className='second-container'>
            <div className='sub-container'>
            <h2>
                The Problem
            </h2>
            <p>
            Concrete around the world is crumbling and cracking. Experts say the estimated cost to repair and improve America's crumbling roads, sidewalks, and bridges is about $200 billion
            (not to mention that poor infrastrcuture costs the average US taxpayer around $3400 a year).
            </p>
            </div>
            <div className='sub-container'>
            <img
                src={require("../assets/crumbling.jpg")}
                alt="Logo"
                style={{ width: "80%", height: 'auto'}} // Adjust the width as needed
            />
            </div>
        </div>

        <div className='middle-container'>
            <h1>
                So we tried our best to solve the issue...
            </h1>
        </div>

        <div className='second-container'>
            <div className='sub-container'>
            <img
                src={require("../assets/components.jpg")}
                alt="Logo"
                style={{ width: "60%", height: 'auto'}} // Adjust the width as needed
            />
            </div>
            <div className='sub-container'>
            <h2>
                How We're Fixing It
            </h2>
            <p>
            To fix the world's concrete, we're using the power of robotics and computer vision to create a compact, efficient, and affordable robot. Our current prototype
            (nicknamed "P1" for Prototype One) uses an ensemble of computer vision, on-board computing, and a robust drivetrain to effectively detect and fill
            cracks of all shapes and sizes.
            </p>
            </div>
        </div>       
        </div>
        
    )
}

export default Home;