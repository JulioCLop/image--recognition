import React from 'react';
import './FaceRecognition.css';






const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className='center ma'>
            <div className='mt2'>
                <div className='relative'>
                <img id='input_image' width='500px' height='auto' src={imageUrl} alt="" />
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} className='bounding-box'></div>
                </div>
            </div>
        </div>
    )
};


export default FaceRecognition;
