import React from 'react';
import "./AdvertisementOne.css";

function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne__main">
            <div className="AdvertisementOne__header">
            Up to 70% off | Electronics clearance store
            </div>
            <div className="AdvertisementOne__body">
                <img src="https://ik.imagekit.io/amazon1234/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__nBkAcb2wW.jpg?updatedAt=1627731880089" width="300px" />
            </div>
            <div className="AdvertisementOne__footer">
                See more
            </div>
        </div>
    );
}

export default AdvertisementOne;