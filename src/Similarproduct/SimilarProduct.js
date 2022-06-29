import React from 'react'
import './similarproduct.css'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'
import bgimg from './src/../../Assets/imges/vivo-X60-Pro-Midnight-Black-1.png'
import bgimg0 from './src/../../Assets/imges/vivo-y12s-pakistan-priceoye-l8v64-500x500.webp'
import bgimg01 from './src/../../Assets/imges/Vivo-V20-500x500.webp'
import bgimg1 from './src/../../Assets/imges/99fbd85f919b6f3f7cc17dd725f0bb5a.png'
import bgimg4 from './src/../../Assets/imges/vivo-y51s-pakistan-priceoye-y27fc.jpg'
import bgimg5 from './src/../../Assets/imges/Vivo-T1-price-in-Pakistan.png'

const SimilarProduct = () => {
    var btn1 =<a href="https://adrspunjab.gov.pk/Account/LogIn"  target="_blank"> <button  className="btn1">Click me </button></a>
  var btn2 =<a href="https://phfmc-punjab.org/"  target="_blank"> <button className="btn1">Click me </button></a>
  var btn3 =<a href="https://prabor.savex.com.pk/"  target="_blank"><button className="btn1">Click me </button> </a>
  var btn4 =<a href="#"  target="_blank"> <button className="btn1">Click me </button></a>
  const slides =[
    {image:bgimg0,title:"Product 1 ",description:"Ebay clone Product"},
    {image:bgimg01,title:"Product 2",description:"Ebay clone Product "},
    {image:bgimg,title:"product 3",description:"Ebay clone Product"},
    {image:bgimg1,title:"Product 4 ",description:"Ebay clone Product"},
    {image:bgimg4,title:"Product 5 ",description:"Ebay clone Product"},
    {image:bgimg5,title:"Product 6 ",description:"Ebay clone Product"},
    // {image:'https://picsum.photos/600/300',title:"this is tile",description:"this is description this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description"},
    // {image:'https://picsum.photos/700/300',title:"this is tile",description:"this is description this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description"},
    // {image:'https://picsum.photos/640/300',title:"this is tile",description:"this is description this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description"},
    // {image:'https://picsum.photos/440/300',title:"this is tile",description:"this is description this is descriptionthis is descriptionthis is descriptionthis is descriptionthis is descriptionthis is description"},
  
  ];
  
  const slideLeft=()=>{
    var slider = document.getElementById("slider")
    slider.scrollLeft  = slider.scrollLeft + 1300;
  }
  const slideRight=()=>{
    var slider = document.getElementById("slider")
    slider.scrollLeft  = slider.scrollLeft - 1300;
  }
  var btn1 = <button>hello</button>
    return (
        <div>
             <h1 className="heading-project">- Similar Product -</h1>
    <div className="mainSlider-container">
      <MdKeyboardArrowLeft size={40} className="slider-icon left" onClick={slideLeft} />
      <div id="slider">
        {
        slides.map((slide,index)=>{
          return(
            <div className="slider-card" key={index}>
              <div className="slider-card-img" >
                  <img className="similarimg" src={slide.image}/>
              </div>
              <p className="card-tilte">{slide.title}</p>
              <p className="card-description">{slide.description}</p>
              <div>

              </div>
              
            
                
            </div>
          )
        })
        }
      </div>
      <MdKeyboardArrowRight  size={40} className="slider-icon right" onClick={slideRight}/>
    </div>
    
        </div>
    )
}

export default SimilarProduct
