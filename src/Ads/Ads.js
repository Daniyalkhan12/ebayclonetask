import React from 'react'
import './ads.css'
import dimg1 from './src/../../Assets/imges/OPPO-A5-2020-design.jpg'
const Ads = () => {
    return (
        <div>
            <div className="form-control upper-ads border-0">
            <div className="card ads-cards border">
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  
                  <p >ViVo A10</p>
                  <p >Memory:256GB</p>
                  <p >Color : Black</p>
                  <p >Price : 200$</p>
                 
                </div>
              </div>
              <div className="card ads-cards" >
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  
                <p >ViVo A10</p>
                  <p >Memory:256GB</p>
                  <p >Color : Black</p>
                  <p >Price : 200$</p>
                 
                </div>
              </div>
              <div className="card ads-cards" >
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                
                <p >ViVo A10</p>
                  <p >Memory:256GB</p>
                  <p >Color : Black</p>
                  <p >Price : 200$</p>
                 
                </div>
              </div>
              <div className="card ads-cards" >
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                 
                <p >ViVo A10</p>
                  <p >Memory:256GB</p>
                  <p >Color : Black</p>
                  <p >Price : 200$</p>
                 
                </div>
              </div>
              
          </div>
        </div>
    )
}

export default Ads
