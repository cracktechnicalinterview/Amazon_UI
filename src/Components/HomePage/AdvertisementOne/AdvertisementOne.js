import React from 'react';
import "./AdvertisementOne.css";

function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__header">
                {props.definition.header}
            </div>
            <div className="AdvertisementOne__body">
                <img src={props.definition.definition[0]} width="300px" />
            </div>
            <div className="AdvertisementOne__footer">
                See more
            </div>
        </div>
    );
}

export default AdvertisementOne;