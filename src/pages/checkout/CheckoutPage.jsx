import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import './CheckoutPage.styles.scss';


const CheckoutPage = ({cartItems, total}) => {
  return(
    <div className="checkout-page">
      <div className="checkout-header">

      <div className="header-block">
        <span>product</span>
      </div>

      <div className="header-block">
        <span>description</span>
      </div>

      <div className="header-block">
        <span>quantity</span>
      </div>

      <div className="header-block">
        <span>price</span>
      </div>

      <div className="header-block">
        <span>remove</span>
      </div>

      </div>
{cartItems.map(cartItem => cartItem.name)}

      <div className="total">
        <span>
          TOTAL: ${total}
        </span>
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);