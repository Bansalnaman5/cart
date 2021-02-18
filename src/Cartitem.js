import React from 'react'

class CartItem extends React.Component{
    render(){
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>Product</div>
                    <div style={{color:'#178907'}}>Price</div>
                    <div style={{color:'#2598'}}>Quantity</div>
                    <div className="cart-item-actions">
                        {/* button for actions */}
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