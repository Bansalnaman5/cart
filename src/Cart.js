import React from 'react';
import CartItem from './Cartitem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:40000,
                    qty:1,
                    product:"Mobile Phone",
                    img:"https://boip.in/31997-thickbox_default/oneplus-6-8gb-128gb-refurbished-very-good.jpg",
                    id:1
                },
                {
                    price:1990,
                    qty:1,
                    product:"Watch",
                    img:"https://images-na.ssl-images-amazon.com/images/I/719p-Up-hkL._UL1500_.jpg",
                    id:2

                },
                {
                    price:12000,
                    qty:1,
                    product:"Laptop",
                    img:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg",
                    id:3
                }
            ]
        }            
    }
    handelInceaseQuantitty=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;

        this.setState({
            products:products
        })
    }
    handelDecreaseProduct=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty>1){

            products[index].qty-=1;
            this.setState({
                products:products
            })
        }
    }
    handelDeleteProduct=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products.splice(index,1);
        this.setState({
            products:products
        })
    }
    render(){
        const {products}=this.state;
        return(
            <div className='cart' >
                {
                    products.map((product)=>{
                        return(
                            <CartItem product={product} 
                            key={product.id} 
                            increaseQuantity={this.handelInceaseQuantitty} 
                            decreaseQuantity={this.handelDecreaseProduct}  
                            delelteproduct={this.handelDeleteProduct}                          
                            />
                        )
                    })
                }
            </div>
        
        );
    }
}
export default Cart;