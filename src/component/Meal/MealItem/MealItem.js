import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealsForm from './MealsForm'

const MealItem = (props) => {

  const cartCtx=useContext(CartContext)

    const price=`$${props.price.toFixed(2)}`;

    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
          id:props.id,
          name:props.name,
          amount:amount,
          price:props.price
        })
        console.log('here item added to cart',cartCtx);

    }

  return (
    <li>
         <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
           
           <MealsForm onAddToCart={addToCartHandler} />
           
        </div>
    </li>
  )
}

export default MealItem