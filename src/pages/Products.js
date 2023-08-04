import React from 'react';
import '../App.css';
import './Products.css';

function Products(){
    return(
        <div>
        <div className='first-container-products'>
            <h1>Introducing P1.</h1>
            <p>Taking our first steps toward a more robust future.</p>
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
                style={{ width: "15%", height: '28%', marginTop: '150px'}} // Adjust the width as needed
            />

            <img
                src={require("../assets/coral.jpg")}
                alt="Logo"
                style={{ width: "10%", height: '28%', marginTop: '375px', marginLeft: '20px'}} // Adjust the width as needed
            />
            </div>

            <img
                src={require("../assets/ProductsPanel3.jpg")}
                alt="Logo"
                style={{ width: "100%", marginTop: '-135px'}} // Adjust the width as needed
            />

            <div className='middle-steps-container'>
                <h2>If we find a crack, we then...</h2>
            </div>
            

            <div className='steps-container-US'>
                <div className='steps-content-US'>
                    <h2>2. Go over the crack with an ultrasonic sensor</h2>
                    <p>We use an ultrasonic sensor to gauge the crack's depth and volume.</p>
                </div>
            </div>

        </div>
    )
}

export default Products;