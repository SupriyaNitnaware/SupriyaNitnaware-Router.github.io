import React from 'react';
import img1 from './apple.jpg';
import img2 from './grapes.jpg';
import img3 from './orange.jpg';
import img4 from './mango.jpg';
import img5 from './capple.jpg';

function About()
{
    return(
        <div  className="">
            <h1>Services Page</h1>
            <div class="gallary">
                <a target="_blank" href={img1} width="600" height="400"> 
                    <img src={img1} alt="" ></img>
                </a>
                <div class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis reprehenderit sit tenetur corrupti,</div>
            </div>

            <div class="gallary">
                <a target="_blank" href={img2} width="600" height="400">
                    <img src={img2} alt=""></img>
                </a>
                <div class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis reprehenderit sit tenetur corrupti,</div>
            </div>

            <div class="gallary">
                <a target="_blank" href={img3} width="600" height="400"> 
                    <img src={img3} alt=""></img>
                </a>
                <div class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis reprehenderit sit tenetur corrupti,</div>
            </div>

            <div class="gallary">
                <a target="_blank" href={img4} width="600" height="400">
                    <img src={img4} alt=""></img>
                </a>
                <div class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis reprehenderit sit tenetur corrupti,</div>
            </div>

            <div class="gallary">
                <a target="_blank" href={img5} width="600" height="400">
                    <img src={img5} alt=""></img>
                </a>
                <div class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis reprehenderit sit tenetur corrupti,</div>
            </div>

            
        </div>
    )
}

export default About;