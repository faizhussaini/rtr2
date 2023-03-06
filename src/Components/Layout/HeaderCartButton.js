import React from 'react'
import CartIcon from '../Cart/CartIcon'
import clasess from './HeaderCartBut.module.css'
const HeaderCartButton = (props) => {
  return (
    <button className={clasess.button}>
    <span className={clasess.icon}>
    <CartIcon/>
    </span>
    <span> Your Cart</span>
    <span className={clasess.badge}> 3</span>
    </button>
  )
}

export default HeaderCartButton