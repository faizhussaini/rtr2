import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext);

  const numberOfCartItem=cartCtx.items.reduce((currNo,item)=>{
    return currNo+item.amount;
  },0)


  return (
    <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Apka PLatter</span>
    <span className={classes.badge}>{numberOfCartItem}</span>
</button>
  )
}

export default HeaderCartButton