import React from 'react';
import '../App.css';
import './Products.css';

function Products(){
    return(
        <div className='rigid'>
        <div className='first-container-products'>
            <h1>Introducing Prototype1.</h1>
            <p>A quick summary on how our robot (abbreviated P1) operates.</p>
        </div>

        <div className='steps-container'>
            <div className='steps-content'>
                <h2>1. Drive forward and detect cracks</h2>
                <p>P1 currently uses the Raspberry Pi as its central technology hub. Powering our motors, copmuter vision system, and 
                        individual subsystems, it provides a reliable platform for controls and coordination. Although the Raspberry Pi caters to our current needs,
                        we hope to design our own custom PCBs to streamline our future products. As for crack detection, we interface our technology with a Google Coral Camera Module,
                        which performs real-time analysis using CNN models.
                </p>

                <p>Once a fissure is detected, we are able to derive its exact coordinates by using color masking and image processing.
                        This information helps P1's subsystems trace over the crack.
                </p>
            </div>
            <img
                src={require("../assets/raspi.jpg")}
                alt="Logo"
                style={{ width: "15%", height: '26%', marginTop: '150px'}} // Adjust the width as needed
            />

            <img
                src={require("../assets/coral.jpg")}
                alt="Logo"
                style={{ maxWidth: "10%", maxHeight: '28%', marginTop: '375px', marginLeft: '20px'}} // Adjust the width as needed
            />
            </div>

            <img
                src={require("../assets/ProductsPanel3.jpg")}
                alt="Logo"
                style={{ width: "100%", 
                        marginTop: '-135px', 
                        transformOrigin: "center",
                        display: "flex"}} // Adjust the width as needed
            />

            <div className='ProductsPanel3'>
                
            </div>

            <div className='middle-steps-container'>
                <h2>After we find an anomaly we...</h2>
            </div>
            

            <div className='steps-container-US'>
                <div className='steps-content-US'>
                    <h2>2. Go over the crack with an ultrasonic sensor</h2>
                    <p>We use an ultrasonic sensor to gauge the crack's depth and volume.</p>
                </div>
            </div>

            <div className='steps-container-US'>
                <div className='steps-content-US'>
                    <h2>3. Clean the crack with compressed air</h2>
                    <p>Before we proceed, we must remove any dirt or other debris to ensure that our polymer will bind and solidify as intended.</p>
                </div>
            </div>

            <div className='steps-container-US'>
                <div className='steps-content-US'>
                    <h2>4. Mist the crack</h2>
                    <p>Misting allows our polymer to stick to the inside of the crack better.</p>
                </div>
            </div>

            <div className='steps-container-US'>
                <div className='steps-content-US'>
                    <h2>5. Extrude eco-friendly fillig into the crack</h2>
                    <p>Finally, we use an auger and a funnel to extrude our crack sealant.</p>
                </div>
            </div>

            <div className='steps-container-US'>
                <div className='steps-content-US-bot'>
                    <h3>And repeat!</h3>
                </div>
            </div>

            <img
                src={require("../assets/ProductsPanel7.jpg")}
                alt="Logo"
                style={{ width: "100%", marginTop: '-200px'}} // Adjust the width as needed
            />

            <div className='bottom-container-products'>
                <h1>The P1 Dash: an interactive user experience.</h1>
                <p>To tie our user experience together, we've also created an informative dashboard.</p>
            </div>

            <img
                src={require("../assets/MockDash.jpg")}
                alt="Logo"
                style={{ width: "100%", marginTop: '-50px'}} // Adjust the width as needed
            />

            <div className='footer-products'>
                <h4>Copyright © 2023 PavedAI. All rights reserved.</h4>
                <a href="https://www.linkedin.com/company/pavedairobotics" target="_blank" rel="noopener noreferrer">
                    <img
                    src={require("../assets/linkedin.jpg")}
                    alt="Logo"
                    style={{ width: "1.9%", marginTop: '20px'}} // Adjust the width as needed
                    />
                </a>
            </div>

        </div>
    )
}

export default Products;