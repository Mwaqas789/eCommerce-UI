import React from 'react'
import "./CartDetail.css";
import { Link } from 'react-router-dom';

const CartDetail = ({setCartitem,handelAddProduct,handleRemoveproduct,handelCartClear,handleRemoveCart }) => {
    const totalprice = setCartitem.reduce((price,item)=> price + item.quantity * item.price,0)
  return (

        <div className='cart-items'>
        <h1 className='cart-items-hader'>Cart Items</h1>

        <div className='clear-cart'>
            {setCartitem.length >=1 && (
                <button className='clear-cart-button' onClick={handelCartClear}>Clear Cart</button>
            )
            }
            <Link to="/product" className='clear-cart-Back-home'> Back To Product Page</Link>
        </div>

        {
        setCartitem.length ===0 && (<div className='cart-items-empty'> No Item Added</div>
        )}
        
        <div>
            
            {/* item is used a parameter */}
            {setCartitem.map((item)=>(
                <div key={item.id} className='cart-items-list'>
                    <img className='cart-items-images' src={item.image} alt={item.name}/>
                

                <div className='cart-items-name'>{ item.name}</div>

                <div className='cart-items-funcation'> 
                <button className='cart-items-add' onClick={(()=>handelAddProduct(item))}>+</button>
                <button className='cart-items-remove' onClick={(()=>handleRemoveproduct(item))}>-</button>
                <button className='cart-items-remove-cart' onClick={(()=>handleRemoveCart(item))}>Remove</button>
                </div>
                <div className=''> {item.quantity} * ${item.price}</div>

                </div>
            ))}
        </div>
        <div className='cart-items-total-price-name'> Total Price 
        <div className='cart-items-total-price'>${totalprice}</div>
        </div>
    </div>

   
  )
}

export default CartDetail