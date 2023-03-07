import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
const [btnhighlighted,setbtnhighlighted]=useState(false)
  const cartCtx=useContext(CartContext);

  const numberOfCartItem=cartCtx.items.reduce((currNo,item)=>{
    return currNo+item.amount;
  },0)
  
useEffect(()=>{
  if(cartCtx.items.length===0){
    return;
  }
setbtnhighlighted(true)
},[cartCtx])
const buttoncls = `${classes.button} ${btnhighlighted ? classes.bump : ''}`
  return (
    <button className={buttoncls} onClick={props.onClick} >
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItem}</span>
</button>
  )
}

export default HeaderCartButton