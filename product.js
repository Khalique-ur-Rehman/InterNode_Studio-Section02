import React, { useState } from 'react'
import ProductData from './productdata'
import { IoCloseCircle } from "react-icons/io5";
import './style.css'
const Product=()=> {
  const [detail,setDetail]=useState([]);
  const [close,setclose]=useState(false);
  const detailpage=(Product)=>{
    setDetail([{...Product}])
    setclose(true)
  }
  return (
    <>
    {
      close ?
      <div className='detail-container'>
      <div className='deatail-contant'>
       <button className='close'onClick={()=>setclose(false)}><IoCloseCircle/></button> 
        {
          detail.map((x)=>{
            return(
              <>
              <div className='detail-info'>
                <div className='img-box'>
                <img src={x.img}alt={x.title}></img>
                </div>
                <div className='product-detail'>
                <h2>{x.title}</h2>
        <h3>Rs {x.price}</h3>
        <p>{x.des}</p>
        <button>Add to Cart</button>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div> :null
    }
    
    <div className='container'>
      {
        ProductData.map((curElm)=>{
return(<>
<div className='box'>
    <div className='contant'>
<div className='img-box'>
    <img src={curElm.img}alt={curElm.title}></img>
</div>
<div className='detail'>
    <div className='info'>
        <h3>{curElm.title}</h3>
        <p>Rs {curElm.price}</p>
    </div>
    <button onClick={()=>detailpage (curElm)}>View</button>
</div>
    </div>
</div>
</>)
        } )
      }
    </div>
    </>
  )
}

export default Product
