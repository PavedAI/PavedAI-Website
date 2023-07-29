import React from 'react';
import './About.css';

// reference: https://aurora.tech/

function About(){
    return(
        <div>
            <div className='first-container-about'>
                <h1>
                    We are on a mission to fix global infrastructure.
                </h1>

                <p>
                    By combining our core values of collaboration, creativity, and curiosity and implementing them into the work we do, we are taking the first
                    steps to engineering the infrastructure of the future.
                </p>
            </div>

            <img
                src={require("../assets/AboutPanel2.jpg")}
                alt="Logo"
                style={{ width: "100%", height: 'auto'}} // Adjust the width as needed
            />

            <div className='team-title-container'>
                <h1>
                    Meet the team that's making it possible:
                </h1>
            </div>

            <div className='team-container'>
                <div className='rounded-container'>
                    <h2>test</h2>
                    
                </div>
                <div className='rounded-container'>
                    <img
                    src={require("../assets/vivek.jpg")}
                    alt="Logo"
                    style={{ width: "35%", height: '40'}} // Adjust the width as needed
                    />
                    <div className='rounded-subcontainer'>
                        <h2>Vivek Patel</h2>
                        <p>Co-founder and Hardware Lead</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About;