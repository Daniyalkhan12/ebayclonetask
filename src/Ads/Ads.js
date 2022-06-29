import React from 'react'
import './ads.css'
import dimg1 from './src/../../Assets/imges/OPPO-A5-2020-design.jpg'
const Ads = () => {
    return (
        <div>
            <div className="form-control upper-ads border-0">
            <div className="card">
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
                </div>
              </div>
              <div className="card" >
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                  
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
                </div>
              </div>
              <div className="card" >
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
                </div>
              </div>
              <div className="card" >
                <img src={dimg1} className="card-img-top" alt="..."/>
                <div className="card-body">
                 
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 
                </div>
              </div>
              
          </div>
        </div>
    )
}

export default Ads
