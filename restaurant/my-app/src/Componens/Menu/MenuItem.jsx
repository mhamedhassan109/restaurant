import React from 'react'

function MenuItem({item,handlerADDItem}) {
  return (
    <div className='MenuItem'>
      
      <div className="box">
       
        <div className="imgItem">
          <img src={item.img} alt='img'/>
        </div>
        <div className="textItem">
          <h6>{item.catogry}</h6>
          <h2>{item.name}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, deserunt!</p>
          <h5><strong>${item.price}</strong></h5>
          <button onClick={()=>handlerADDItem(item)}>add to cart</button>
        </div>
        
      </div>
     
    </div>
  )
}

export default MenuItem
