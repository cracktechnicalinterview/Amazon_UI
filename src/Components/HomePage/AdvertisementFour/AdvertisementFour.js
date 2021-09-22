import React from 'react';
import "./AdvertisementFour.css"

function AdvertisementFour(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__header">
                {props.definition.header}
            </div>
            <div className="AdvertisementOne__body">
                <img src={props.definition.definition[0]} className="ad_fourImage" />
                <img src={props.definition.definition[1]} className="ad_fourImage" />
                <img src={props.definition.definition[2]} className="ad_fourImage" />
                <img src={props.definition.definition[3]} className="ad_fourImage" />
             </div>
            <div className="AdvertisementOne__footer">
                See more
            </div>
        </div>
    );
}

export default AdvertisementFour;