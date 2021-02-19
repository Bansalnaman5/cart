import React from 'react'

class CartItem extends React.Component{
    IncreaseQuantity(){
        this.setState({
            qty:this.state.qty+1

        });
    }
    DecreaseQuantity(){
        if(this.state.qty>1){
            this.setState({
                qty:this.state.qty-1
            });
        }
    }
    render(){
        const {price,qty,product,img}=this.props.product;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img src ={img} style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{product}</div>
                    <div style={{color:'#178907'}}>{price}</div>
                    <div style={{color:'#2598'}}>{qty}</div>
                    <div className="cart-item-actions">
                        {/* button for actions */}
                        <img onClick={this.IncreaseQuantity.bind(this)} alt="increase" className='action-icons' src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1613628378~hmac=558a2cfb477aed6db5812174926361cc"/>
                        <img onClick={this.DecreaseQuantity.bind(this)} alt="decrease" className='action-icons' src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1613628408~hmac=f5225ae781bdf0fb4f077eebfb6b11d4"/>
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