import React, { Component } from 'react';
import Cartitem from './Cartitems';



class Navbar extends Component{
    render(){
       return(
        <div className="mynav">
         <div className="container-fluid navbar navbar-expand-md navbar-light bg-white fixed-top justify-content-between shadow-lg" >
             
             <div id="LOGO" className='d-flex flex-row justify-content-center align-items-center'>
                <img id="logo-img" src="logo.png" alt="NOT FOUND"/>
                <p id="foodbuckets">FOOD BUCKET</p>
            </div>
                <div>
                
                    <button type="button" id="CART" className="btn1 sticky-top" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bucket" viewBox="0 0 16 16">
  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/>
</svg>
                    </button>

                    <span id="cartSize">{this.props.cart.length}</span>
                   
                </div>
         </div>
         
            <Cartitem cart={this.props.cart} close={this.props.close} inc={this.props.inc} dec={this.props.dec} rem={this.props.rem}/>
         </div>
       )
    }
}
export default Navbar;