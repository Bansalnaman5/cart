import React from 'react'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            qty:1,
            product:"Phone",
            img:"https://boip.in/31997-thickbox_default/oneplus-6-8gb-128gb-refurbished-very-good.jpg"
        };
    }
    render(){
        const {price,qty,product,img}=this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img src ={this.state.img} style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{this.state.product}</div>
                    <div style={{color:'#178907'}}>{price}</div>
                    <div style={{color:'#2598'}}>{this.state.qty}</div>
                    <div className="cart-item-actions">
                        {/* button for actions */}
                        <img alt="increase" className='action-icons' src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1613628378~hmac=558a2cfb477aed6db5812174926361cc"/>
                        <img alt="decrease" className='action-icons' src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613628408~hmac=f5225ae781bdf0fb4f077eebfb6b11d4"/>
                        <img alt="delete" className='action-icons' src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1613628202~hmac=eabfc3ff0609fab35b865fdcab46f81f"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        boredrRadius: 4,
        background:'#ccc'
    }
}

export default CartItem;