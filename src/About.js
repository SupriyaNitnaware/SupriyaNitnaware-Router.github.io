import React from 'react';
import abt from './abt.jpg';

function About()
{
    return(
    <div className="abtback">
        <div class="section1">
            <div class="head2">
                <h1 className="h1">About Us</h1>
            </div>
            <div class="box1">
                <div class="p1">
                    <h1>Why Choose Us?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent ore veritatis et perspiciatis unde omnis iste natus error sit voluptatemerror sit voluptatem</p>
                </div>
                <div class="p2">
                    {/* <h1>Contact Details</h1> */}
                    {/* <p>Call us: +11 900 800 100</p> */}
                    <img src={abt} className="mg"></img>
                </div>
            </div>
        </div>
     </div>
    )
}

export default About;