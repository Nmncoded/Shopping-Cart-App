import React from 'react';
class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state ={ 
            displayBag:false,
        }
    }
    handleShowCart = () => {
        this.setState((prev) => {
            return {
                displayBag: !prev.displayBag,
            }
        })
    }

    render(){
        let cartProducts = this.props.addToCartBtnProducts;
        // console.log(cartProducts);
        return <>
            <section className='main-cart'>
                <div onClick={this.handleShowCart} className='bag-btn'>
                    {this.state.displayBag ? <h6 className='cross'>X</h6> :<img src="/static/bag-icon.png" alt='bag-icon' />}
                    <span className='num'>{cartProducts.reduce((acc,p) => {return acc = acc + p.quantity},0)}</span>
                </div>
                <div className={this.state.displayBag ? "cart activ-cart" : "cart"} >
                    <header className='cart-header'>
                    <img src="/static/bag-icon.png" alt='bag-icon' />
                    <span className='num-1'>{cartProducts.reduce((acc,p) => {return acc = acc + p.quantity},0)}</span>
                    <span>Cart</span>
                    </header>
                    <ul className='clicked-items'>
                        {
                            (cartProducts.length === 0) ? <li className='nil'>Add items to cart</li> : cartProducts.map(p => {
                                return (
                                    <li key={p.id} >
                            <button onClick={ () => this.props.handleCrossBtn(p.id)} className='cross-btn'>X</button>
                            <div className='img-of-item'>
                                <img src={`/static/products/${p.sku}_2.jpg`} alt={p.sku}  />
                            </div>
                            <div className='info-of-item'>
                                <h3>{p.title}</h3>
                                <h4>{p.availableSizes[0]} | {p.style}</h4>
                                <h5>Quantity: {p.quantity}</h5>
                            </div>
                            <div className='price-per-item'>
                                <span>${p.price}</span>
                                <div className='plus-minus-btns'>
                                    <button onClick={() => this.props.handleQty(p.id,"plus",p)} >+</button>
                                    <button onClick={() => this.props.handleQty(p.id,"minus",p)} >-</button>
                                </div>
                            </div>
                        </li>
                                )
                            })
                        }
                        
                    </ul>
                    <div className='subtotal'>
                        <span>Subtotal</span>
                        <span>{this.props.totalAm}</span>
                    </div>
                    <button onClick={() => alert(`total amount is ${this.props.totalAm}`)} className='checkout-btn'>CHECKOUT</button>
                </div>
            </section>
        </>
    }
}

export default Cart;