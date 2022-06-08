import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Context } from '../Context';


class Navbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      qty: 0
    }
  }

  static contextType = Context
  

  render() {
    console.log(this.context.cartTotalQty)
    return (
      <div className='nav-containner'>
          <ul className='nav-categories'>
              {this.context.cat.map(cat => (<li key={cat.name} ><Link key={cat.name} style={{ textDecoration: 'none', color: "#5ECE7B", padding: "10px",paddingBottom: "30px"}} to={cat.name}>{cat.name.toUpperCase()}</Link></li>))}
          </ul>
          <img className='logo' src="./Group.svg" alt="" />
          <div className='nav-cart'>
            <select value={this.context.currency} onChange={this.context.handleCurrency}>
                {this.context.currencies.map(currency => <option key={currency.label} value={currency.label}>{`${currency.symbol} ${currency.label}`}</option>)}
            </select>
            <img onClick={() => this.props.handleMiniCart()} className='cart' src="./Vector.svg" alt="" />
            <h1 className='navbar-qty'>{this.context.cartTotalQty}</h1>
          </div>
      </div>
    )
  }
}


export default Navbar