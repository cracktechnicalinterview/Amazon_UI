import React, { useContext } from 'react';
import "./Checkout.css";
import Grid from '@material-ui/core/Grid';
import CheckoutItems from './CheckoutItems';
import { CartContext } from '../CartContext';

function Checkout(props) {
    const {item,size,increment} = useContext(CartContext);

    const cartValue = function(){
        let price=0;
        for(let i=0;i<item.length;i++){
            price+=parseInt(item[i].price);
        }
        return price;
    }

    return (
        <div className="checkout__body">
             <Grid container >
                 <Grid item={10}>
                    <div className="checkout__container">
                        <div style={{fontSize: "30px" , fontWeight: "500" , padding : "20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div>
                            { 
                                item.length >0 ?
                                item.map( (value) => (
                                    <CheckoutItems definition={value} />
                                ))
                                : <div style={{height: "100vh", margin: "30px" }}> Please buy something</div>
                            }
                            {/* <CheckoutItems />
                            <CheckoutItems />
                            <CheckoutItems /> */}
                        </div>
                    </div>
                 </Grid>
                 <Grid item={2}>
                    <div style={{ width: "300px", height:"200px", padding: "20px", marginTop: "25px", backgroundColor: "white"}}>
                        <div style={{ fontSize: "26px"}}>Subtotal ( {size} items): <strong>{ cartValue() }</strong></div>
                        <div style={{paddingTop : "25px "}}>
                            <button className="placeorder__button" >Proceed to Buy</button>
                        </div>
                    </div>
                 </Grid>
             </Grid>
        </div>
    );
}

export default Checkout;