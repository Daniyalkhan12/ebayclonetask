import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Hi sing in or redister </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Daily Deals</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Help & Contact</a>
                </li>
              </ul>
           
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                      <a className="nav-link" href="#">Ship to </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Sell</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Watchlist</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My ebay</a>
                      </li>
                  </ul>
          
            </div>
          </nav>  
        </div>
    )
}

export default Navbar
