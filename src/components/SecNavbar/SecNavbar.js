import React from 'react'
import dimg2 from '../../Assets/imges/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './secnavbar.css'
const SecNavbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <img src={dimg2} width="100" height="100" alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav col-12">
                <li className="nav-item active">
                <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    dropdown
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                </li>
                <form className="form-inline px-2 my-lg-0 col-8" style={{display: "flex"}}>
                    <input className="form-control mr-sm-2 col-10 my-sm-3 " type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-3 nav-link col-2" type="submit" style={{margin: "10px"}}>Search</button>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Advance <span className="sr-only">(current)</span></a>
                      </li>
                </form>
                  
              </ul>
              
            </div>
          </nav>
        </div>
    )
}

export default SecNavbar
