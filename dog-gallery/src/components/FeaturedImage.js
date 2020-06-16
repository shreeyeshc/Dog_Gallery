import React from 'react';


function FeaturedImage(props) {
    return(
        <div className="jumbotron">
            <img alt="" className="rounded mx-auto d-block" src={props.imgSrc} height="250"/>
        </div>
    )
};
export default FeaturedImage;