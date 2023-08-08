import React from 'react';
import './About.css';

// reference: https://aurora.tech/

function About(){
    return(
        <div>
            <div className='first-container-about'>
                <h1>
                    We're on a mission to fix global infrastructure.
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
                    <img
                    src={require("../assets/vardhan.jpg")}
                    alt="Logo"
                    style={{ width: '110px', height: '80%', margin: '20px', marginLeft: '25px'}} // Adjust the width as needed
                    />
                    <div className='rounded-subcontainer' style={{marginLeft: '35px'}}>
                        <h2>Vardhan Agnihotri</h2>
                        <p>- Co-founder & Software Lead</p>
                        <p>- Head of Business Operations</p>
                    </div>
                </div>
                <div className='rounded-container'>
                    <img
                    src={require("../assets/vivek.jpg")}
                    alt="Logo"
                    style={{ width: '145px', height: 'auto', margin: '25px'}} // Adjust the width as needed
                    />
                    <div className='rounded-subcontainer'>
                        <h2>Vivek Patel</h2>
                        <p>- Co-founder & Hardware Lead</p>
                    </div>
                </div>
            </div>

            <div className='custom-scrollbar'>

            </div>

        <div className='footer-investment'>
            <h4>Copyright © 2023 PavedAI. All rights reserved.</h4>
        </div>
        </div>
    )
}

export default About;