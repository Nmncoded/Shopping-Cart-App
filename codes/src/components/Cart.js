import React from 'react';
class Cart extends React.Component {
    constructor(props){
        super()
    }
    render(){
        console.log(this.props.products)
        return <>
            <h1>hello cart</h1>
        </>
    }
}

export default Cart;