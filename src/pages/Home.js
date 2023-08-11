import React from 'react';
import '../App.css';
import './Home.css';

// reference: https://aurora.tech/

function Home(){
    return(
        <div className='main-container'>
        <div className='first-container'>
            <h1>
                Cleansing the world of cracked concrete.
            </h1>
        </div>

        <img
            src={require("../assets/HomePanel2.jpg")}
            alt="Logo"
            style={{ width: "100%", height: 'auto', marginBottom: '-10px', marginTop: '-45px'}} // Adjust the width as needed
        />

        <div className='second-container'>
            <div className='sub-container'>
            <h2>
                The problem
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
                PavedAI is the solution.
            </h1>
        </div>

        <div className='second-container'>
            <div className='sub-container'>
            <img
                src={require("../assets/components.jpg")}
                alt="Logo"
                style={{ width: "70%", height: 'auto'}} // Adjust the width as needed
            />
            </div>
            <div className='sub-container'>
            <h2>
                How we're fixing it
            </h2>
            <p>
            To fix the world's concrete, we're using the power of robotics and computer vision to create a compact, efficient, and affordable robot. Our current prototype
            (nicknamed "P1" for Prototype One) uses an ensemble of computer vision, on-board computing, and a robust drivetrain to effectively detect and fill
            cracks of all shapes and sizes.
            </p>
            </div>
        </div>  


        <div>
        <img
            src={require("../assets/HomePanel4.jpg")}
            alt="HomePanel4"
            style={{ width: "100%", height: 'auto'}} // Adjust the width as needed
        />
        </div>

        <div className='bottom-container'>
            <h2>
                We're also committed to keeping our planet green.
            </h2>
            <p>
                In addition to trying to fix our roads, bridges, and sidewalks, our team is determined to maintain the highest standards
                of eco-friendliness in our products. We are currently accomplishing this by using non-toxic crack fillers and not interfering with bugs, plants, and other creatures.
                As our team works to expand our product line, we will continue to keep our planet's safety in mind.
            </p>

            <p>
                This goal is only a single part of our broader mission. Go to our 'About' page to learn more about our values and meet our team.
            </p>
        </div>
        
        <div className='footer-home'>
            <h4>Copyright © 2023 PavedAI. All rights reserved.</h4>
            <a href="https://www.linkedin.com/company/pavedairobotics" target="_blank" rel="noopener noreferrer">
                    <img
                    src={require("../assets/linkedindark.png")}
                    alt="Logo"
                    style={{ width: "1.9%", marginTop: '20px'}} // Adjust the width as needed
                    />
            </a>
        </div>
        </div>
        
    )
}

export default Home;