import React from 'react';
import './Investment.css';

function Investment(){
    return(
        <div>
        <div className='first-container-investment'>
            <h1>
                Investors, listen up.
            </h1>
        </div>

        <img
            src={require("../assets/InvestmentPanel2.jpg")}
            alt="Logo"
            style={{ width: "100%", height: 'auto', marginTop: '-80px'}} // Adjust the width as needed
        />

        <div className='info-panels'>
            <div className='info-subcontainer'>
                <h2>Why us?</h2>
                <p>PavedAI offers a novel, one-of-a-kind fix to the deteriorating state of global pavement and infrastructure. Although 
                    there are other companies out there that are able to detect cracks, ours is the only one that can effectively 
                    fill them and simultaneously tie our user experience together with an easy-to-use dashboard. We plan on developing our line of products and to engineer
                    more solutions that can apply to the other problems today's roads and sidewalks face. With these points in mind, 
                    we believe the novel work we are doing is both paramount to the infrastructure of the future and extremely profitable in our current status quo.
                    Come join us as we reinforce our society as a whole. Together, we'll achieve great things.

                </p>
            </div>
        </div>
        </div>
    )
}

export default Investment;