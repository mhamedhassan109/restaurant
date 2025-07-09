import "./CartItem.css"

function CartItem({item,deleteHandler,index,handlerADDQuantity,handlerdecrement}) {
  return (
    <div className="CartItem">
        <div className="CartText">
            <h4>{item.name}</h4>
            <h5>price: ${Number(item.price)}</h5>
            <button onClick={()=>handlerADDQuantity(item.id)}><span>+</span></button>
            <span>{item.Quantity}</span>
            <button onClick={()=>handlerdecrement(item.id)}><span>-</span></button>
            <h6>total:${Number(item.price) * Number(item.Quantity)}</h6>
            <button onClick={()=>deleteHandler(index)} className="remove">remove</button>
        </div>
        <div className="CartImg">
            <img src={item.img} alt="img"/>
        </div>
    </div>
  )
}

export default CartItem