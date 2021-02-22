import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase/app';

class App extends React.Component {
    constructor(){
      super();
      this.state={
          products:[
              // {
              //     price:40000,
              //     qty:1,
              //     product:"Mobile Phone",
              //     img:"https://boip.in/31997-thickbox_default/oneplus-6-8gb-128gb-refurbished-very-good.jpg",
              //     id:1
              // },
              // {
              //     price:1990,
              //     qty:1,
              //     product:"Watch",
              //     img:"https://images-na.ssl-images-amazon.com/images/I/719p-Up-hkL._UL1500_.jpg",
              //     id:2

              // },
              // {
              //     price:12000,
              //     qty:1,
              //     product:"Laptop",
              //     img:"https://cdn.mos.cms.futurecdn.net/vEcELHdn998wRTcCzqV5m9.jpg",
              //     id:3
              // }
          ]
      }            
  }

  componentDidMount(){

    firebase.firestore().collection('products').get()
    .then((snapshot)=>{
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
      this.setState({
        products:products
      })
    })
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
  getProductcount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((item)=>{
      count+=item.qty;
    })
    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let tot=0;
    products.map((item)=>{
        tot+=item.qty*item.price;
        return '';
      })
    return tot;
  }
    render(){
      const {products}=this.state;
      return (
        <div className="App">
        <Navbar itemcount={this.getProductcount()}/>
        <Cart products={products}
        increaseQuantity={this.handelInceaseQuantitty} 
        decreaseQuantity={this.handelDecreaseProduct}  
        delelteproduct={this.handelDeleteProduct}
        />
        <div>TOTAL : {this.getCartTotal()}</div>
      </div>
  
    );
  }
}

export default App;
