import React from 'react';
import './Investment.css';
import { ContactUs } from '../components/Contact';

function Investment(){

    return(
        <div>
        <div className='first-container-investment'>
            <h1>
                Investors, listen up.
            </h1>
        </div>

        <img
            src={require("../assets/InvestmentPanel2.png")}
            alt="Logo"
            style={{ width: "100%", height: 'auto', marginTop: '-80px'}} // Adjust the width as needed
        />

        <div className='info-panels'>
            <div className='info-subcontainer'>
                <h2>Why us?</h2>
                <p>PavedAI offers a novel, one-of-a-kind fix to the deteriorating state of global pavement and infrastructure. Although 
                    there are other companies out there that are able to detect cracks, ours is the only one that can effectively 
                    fill them and simultaneously tie our user experience together with an easy-to-use dashboard. We plan on expanding our line of products and engineering
                    more solutions that can apply to the other problems today's roads and sidewalks face. With these points in mind, 
                    we believe the novel work we are doing is both paramount to the infrastructure of the future and extremely profitable in our current status quo.
                    Come join us as we reinforce our society as a whole. Together, we'll achieve great things.

                </p>
            </div>

            <div className='info-subcontainer'>
                <h2>Get into contact:</h2>
                <ContactUs />

            </div>

        </div>

        <div className='footer-investment'>
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

export default Investment;