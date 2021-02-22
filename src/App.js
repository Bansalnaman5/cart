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
          ],
          loading:true
      }       
      this.prod=firebase.firestore().collection('products');  
  }

  componentDidMount(){

    // firebase.firestore().collection('products').get()
    // .then((snapshot)=>{
    //   const products=snapshot.docs.map((doc)=>{
    //     const data=doc.data();
    //     data['id']=doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products:products,
    //     loading:false
    //   })
    // })

    this.prod
    .onSnapshot((snapshot)=>{
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
      this.setState({
        products:products,
        loading:false
      })
    })
  }

  handelInceaseQuantitty=(product)=>{
      // const {products}=this.state;
      // const index=products.indexOf(product);
      // products[index].qty+=1;

      // this.setState({
      //     products:products
      // })
      const docref=this.prod.doc(product.id);
      docref.update({
        qty:product.qty+1
      })
      .then(()=>{
        console.log("document updtaed succesfully!!")
      })
  }
  handelDecreaseProduct=(product)=>{
      // const {products}=this.state;
      // const index=products.indexOf(product);
      // if(products[index].qty>1){

      //     products[index].qty-=1;
      //     this.setState({
      //         products:products
      //     })
      // }
      const docref=this.prod.doc(product.id);
      if(product.qty>1){
        docref.update({
          qty:product.qty-1
        })
      }
  }
  handelDeleteProduct=(product)=>{
      // const {products}=this.state;
      // const index=products.indexOf(product);
      // products.splice(index,1);
      // this.setState({
      //     products:products
      // })
      const docref=this.prod.doc(product.id);
      docref.delete()
      .then(()=>{
        console.log("product delted successfully")
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
  addProduct=()=>{
    this.prod.add({
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GGUgQwhQ1eURz9UWITuxdeYa_iXnbPm6klGBQklIMixc8Y9Vcyko48zxGpVSawDHdasd3OM&usqp=CAc",
      qty:1,
      price:54600,
      product:'i Pad'
    }).then((ref)=>{
      console.log('product has been added succesfully :',ref);
    })
    .catch((err)=>{
      console.log("Aborting error occured :",err);
    })
  }
    render(){
      const {products ,loading}=this.state;
      return (
        <div className="App">
        <Navbar itemcount={this.getProductcount()}/>
        <button onClick={this.addProduct} style={{ padding:20,fontSize:20,marginLeft:10 }} >Add Product</button>
        <Cart products={products}
        increaseQuantity={this.handelInceaseQuantitty} 
        decreaseQuantity={this.handelDecreaseProduct}  
        delelteproduct={this.handelDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div>TOTAL : {this.getCartTotal()}</div>
      </div>
  
    );
  }
}

export default App;
