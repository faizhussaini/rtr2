import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {

    const crtCtx=useContext(CartContext);

    const totalAmount=`${crtCtx.totalAmount.toFixed(2)}`;

    const hasItem=crtCtx.items.length<=0;

    const cartItemRemoveHandler=(id)=>{
        crtCtx.removeItem(id);
    };

    const cartItemAddHandler=(item)=>{
        crtCtx.addItem({...item,amount:1})
    };

    const cartItem=(
        <ul className={classes['cart-items']} >
            {crtCtx.items.map((item)=>(
                <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} />
            ))}

        </ul>
    )

  return (
    <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
        </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {!hasItem && <button className={classes.button}>Order</button>}
    </div>
    </Modal>
  )
}

export default Cart