import React, { Component } from 'react';
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import "./MainPage.css";
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import { Link } from 'react-router-dom';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list :[]
         }
    }
    componentDidMount () {
        let arr = [
            {
                "type" : "one",
                "header" : "Up to 40% off | Home & Kitchen",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
                    "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916"
                    ]
            },
            {
                "type" : "four",
                "header" : "Shop by Category",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/box3_2_UjLOl0OQn.jpg?updatedAt=1627118737037",
                    "https://ik.imagekit.io/amazon1234/box3_3_BNpkVUIf4.jpg?updatedAt=1627118735915",
                    "https://ik.imagekit.io/amazon1234/box3_4_DQnzfSDxh.jpg?updatedAt=1627118740952",
                    "https://ik.imagekit.io/amazon1234/box3_2_UjLOl0OQn.jpg?updatedAt=1627118737037"
                ]
            },
            {
                "type" : "one",
                "header" : "Up to 70% off | Electronics clearance store",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__nBkAcb2wW.jpg?updatedAt=1627731880089"
                    ]
            },
            {
                "type" : "one",
                "header" : "Up to 70% off | Electronics clearance store",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/box2_4_b005M-CUn.jpg?updatedAt=1627118750081"
                    ]
            },
            {
                "type" : "one",
                "header" : "Up to 70% off | Electronics clearance store",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/box4_1_heFiuUTQ5.jpg?updatedAt=1627118751289"
                    ]
            },
            {
                "type" : "four",
                "header" : "Up to 30% off on Cooking essentials | Amazon Fresh",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/box4_2_j7cfsH163.jpg?updatedAt=1627118749199",
                    "https://ik.imagekit.io/amazon1234/tab9_VVlk1J1_x.jpg?updatedAt=1627118745782",
                    "https://ik.imagekit.io/amazon1234/box2_1_Hdj80YRHw.jpg?updatedAt=1627118747528",
                    "https://ik.imagekit.io/amazon1234/box2_3_1Hme7yOEM.jpg?updatedAt=1627118742182"
                ]
            },
            {
                "type" : "four",
                "header" : "Inspired by your Wish List",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/tab8_oJnWNwvIX.jpg?updatedAt=1627118746586",
                    "https://ik.imagekit.io/amazon1234/box2_3_1Hme7yOEM.jpg?updatedAt=1627118742182",
                    "https://ik.imagekit.io/amazon1234/box1_4_yVnP7knQNO.jpg?updatedAt=1627118740078",
                    "https://ik.imagekit.io/amazon1234/tab10_dcLpRR5LD.jpg?updatedAt=1627118739258"
                ]
            },
            {
                "type" : "one",
                "header" : "Festive latest launches",
                "definition": [
                    "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916"
                    ]
            }       
        ];
        this.setState({list: arr});
    }
    render() { 
        return ( 
            <div className="mainpage">

                <div style={{ paddingTop: "260px", display : "flex", flexWrap: "wrap"}}>
                    {
                        this.state.list.map ( (value) => (
                            value.type === "one" ? 
                            <Link to="/display">
                                <AdvertisementOne definition={value} /> 
                            </Link>
                            : 
                            <Link to="/display">
                                <AdvertisementFour definition={value} />
                            </Link>
                        ))
                    }
                    {/* <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementFour />
                    <AdvertisementOne /> */}
                </div>
            </div>
         );
    }
}
 
export default MainPage;