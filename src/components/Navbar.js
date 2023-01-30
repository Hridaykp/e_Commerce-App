import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn, 
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function App() {
    const {cart, totalQty} = useSelector((state)=>state.allCart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCartTotal())
    }, [cart])
  return (
    <MDBNavbar light bgColor='primary'>
      <MDBContainer fluid>
        <MDBNavbarBrand style={{fontWeight:"bolder"}}>eCommerce</MDBNavbarBrand>
        <span>
            <Link to='/' style={{color:"white", fontWeight:"500"}}> All Products </Link>
        </span>
        {/* <MDBBtn color='light'>
            <Link to='/cart'> 
                <span style={{paddingRight:"4px"}}><i class="fas fa-cart-plus"></i></span>
                <span>({totalQty})</span>
            </Link>
            
        </MDBBtn> */}
        <Link to='/cart'>
            <img style={{height:"40px",width:"40px", marginRight:"20px"}} 
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" 
            alt="cart-icon"/>
            <span style={{background: 'yellow',
                borderRadius: '50%',
                padding: '4px 8px',
                position: 'absolute',
                right: 0,
                top:1}} >{totalQty}
            </span>
        </Link>
        
      </MDBContainer>
    </MDBNavbar>
  );
}