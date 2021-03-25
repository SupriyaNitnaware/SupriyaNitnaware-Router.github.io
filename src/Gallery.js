import React from 'react';
import img1 from './a.jpg';
import img2 from './bb.jpg';
import img3 from './cc.jpg';

function Gallery()
{
    return(
        <div  className="section image">
            <h1>Gallery Page</h1>
            <img src={img1} className="mg"></img>
            <img src={img2} className="mg"></img>
            <img src={img3} className="mg"></img>
        </div>
    )
}

export default Gallery;