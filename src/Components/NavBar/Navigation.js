import React, { Component } from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="navbar__component">
                <div className="navbar__logo"></div>
                <div className="navbar__locator">
                    <div className="navbar__locatorImage"></div>
                    <div className="navbar__location"> Bangalore</div>
                </div>
                <div className="navbar__searchcomponent">
                    <div>
                        <select className="nav__dropdown">
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar__searchbox" />
                    </div>
                    <div className="navbar__seaarchboxdiv">
                        <div className="navbar__searchicon" />
                    </div>
                </div>
                <div className="navbar_text navbar__signin">
                    <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
                    <div style={{ fontWeight: "bold" }}>Account & List</div>
                </div>
                <div className="navbar_text navbar__returns">
                    <div style={{ fontSize: "14px" }}>Returns</div>
                    <div style={{ fontWeight: "bold" }}> & Order</div>
                </div>
                <div className="navbar_text navbar__cart">
                    <div src="" className="cart__image" ></div>
                    <div className="cart__item">0</div>
                    <div className="navbar_text_cart">Cart</div>
                </div>
                
            </div>
                <div className="navbar__footer">
                    <div className="navbar__footer_text">Best Seller</div>
                    <div className="navbar__footer_text">Mobile</div>
                    <div className="navbar__footer_text">Amazon Pay</div>
                    <div className="navbar__footer_text">Fashion</div>
                    <div className="navbar__footer_text">Electronics</div>
                    <div className="navbar__footer_text">Prime</div>
                    <div className="navbar__footer_text">New Release</div>
                    <div className="navbar__footer_text">Customer Service</div>
                    <div className="navbar__footer_text">Computers</div>
                    <div className="navbar__footer_text">Home & Kitchen</div>
                </div>
            </div>
        );
    }
}
 
export default NavBar;