import React from 'react';


function ImageGrid (props) {
    return(
        <div className="jumbotron">
                {
                    props.photos.slice(0,18).map((photo,index) => {
                    return <img key={index} onClick={() => props.onPress(photo)}  alt="" className="col-md-2 img-thumbnail imgPointer" src={photo} />
                })
                }
        </div>  
        
    )
};
export default ImageGrid;