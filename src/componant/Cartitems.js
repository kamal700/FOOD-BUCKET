import React, { Component } from 'react';



class Cartitem extends Component{
    clear = ()=>{
        this.props.cart = [];
    }

   
    render(){
        var totalPrice = 0;
        this.props.cart.map(item => (
            totalPrice += item.data.price*item.data.quantity
        ));
        return(
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" style={{width:"90vw",maxWidth:"800px",overflow:"auto"}}>
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">My Bucket</h5>
                            <button type="button" className="btn1" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                        
                        

                        {/*Cart Items*/}
                        <div className="modal-body" style={{width:"100%"}}>
                            {this.props.cart.map((item, i) => (
                                <div key = {i}> 
                                   <div className="cartElements" >
                                        <img  src={item.data.location} alt="Not found" style={{width:"100%"}}/>
                                        <div>{item.data.name}</div>
                                
                                        <div>{"Rs." 
                                        +item.data.price}</div>
                                        <div style={{display:'flex',alignItems:'center'}}>
                                            {item.data.quantity}
                                            <button className="btn1" index={i} style={{float:"right",margin:"2px",padding:"2px",background:'white',color:"orange"}} onClick={() => this.props.inc(i)}> 
                                                <i className="fa fa-arrow-circle-up"> </i>
                                            </button>
                                            <button className="btn1" style={{float:"right",margin:"2px",padding:"2px",background:'white',color:"orange"}} index={i} onClick={()=>this.props.dec(i)}> 
                                                <i className="fa fa-arrow-circle-down"> </i>
                                            </button>

                                        </div>
                                        <button style={{background:'white',padding:'0px',border:"0px",color:"black"}} onClick={()=>this.props.rem(i)}>remove</button>
                                        
                                       
                                   </div>
                                        <hr/>
                                   </div>
                                   
                            ))}
                        </div>

                        <div>
                        <div style={{background:'orange'}} className="container">
                            <span style={{marginRight:"100px"}}>Total Price</span>
                            
                            <span style={{marginLeft:"175px"}}>{"Rs."+totalPrice}</span>
                        </div>
                        </div>

                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.props.close}>Clear Changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
        )
    }
}
export default Cartitem;
