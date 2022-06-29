import React from 'react'
import './mainsec.css'

import dimg from './src/../../Assets/imges/oppo-reno.jpg'

const MainSec = () => {
    return (
        <div>
            <div className="container col-12">
            <div className="row">
              <div className="col-sm-4 border">
                
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={dimg} alt="First slide"/>
                      </div>
                  
                      
                    </div>
                    
                  </div>
              </div>
              <div className="col-sm-4">
                <span> Product Name </span>
                <div className=" row">
                    <label  className="col-md-4 col-form-label ">Condition</label>
                    <div className="col-md-6">
                        <label  className="col-md-4 col-form-label ">New</label>
                    </div>
                </div>
                <div className=" row">
                    <label  className="col-md-4 col-form-label ">Color</label>
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <select className="form-control col-10"  name="" id="">
                             <option value="">1</option>
                            </select>
                         </div>
                    </div>
                </div>
                <div className=" row">
                    <label className="col-md-4 col-form-label ">Model</label>
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <select className="form-control col-10" name="" id="">
                             <option value="">1</option>
                            </select>
                         </div>
                    </div>
                </div>
                <div className=" row">
                    <label  className="col-md-4 col-form-label ">Quantity</label>
                    <div className="col-md-3">
                        <div className="col-md-12">
                            <select className="form-control col-12" name="" id="">
                             <option value="">1</option>
                            </select>
                         </div>
                        
                    </div>
                    <span>4 Availible<br/>433/sold/ feedback</span>
                </div>
              <div className="row"> 
                
                <div className="col-sm-6">
                    <div className=" row">
                        <label  className="col-md-4 col-form-label ">Price </label>
                        <div className="col-md-6">
                            <label  className="col-md-4 col-form-label ">28.8</label>
                        </div>
                    </div>
                  </div>
                  <div className="col-sm">
                    <button type="button" className="btn btn-primary">Buy It Now</button>
                    <br/>
                    <button type="button" className="btn btn-info">Add To Cart</button>
                  </div>
              </div>
              </div>
              <div className="col-sm-4 border">
                <div className="card card-mainsec">
                    <div className="card-body">
                      This is some text within a card body.
                    </div>
                  </div>
                  <div className="card card-mainsec" >
                    <ul className="list-group list-group-flush" style={{width: '100%'}}>
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MainSec
