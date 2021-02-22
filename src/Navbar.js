import React from 'react';

const Navbar=(props)=>{
    const {itemcount}=props;
        return(
            <div style={styles.nav} >
                <div style={styles.cartimagecontainer} >
                    <img alt="" style={styles.cartimage} src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1613730933~hmac=842a6f40426e246a1154f420892d5910" />
                    <span style={styles.productcount}>{itemcount}</span>
                </div>
            </div>
        )
    }


const styles={
    nav:{
        height:70,
        background:'#E3F107',
        display:'flex',
        justifyContent:'flex-end'
    },
    cartimage:{
        height:30,
        marginRight:30,
        marginTop:20
    },
    cartimagecontainer:{
        position:'relative'
    },
    productcount:{
        background:'#1607C8',
        color:'#DAF7A6',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:5,
        top:3
    }
}

export default Navbar;