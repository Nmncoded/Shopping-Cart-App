import React from 'react';
import Sidebar from './Sidebar.js';
import Component from './Component.js';
import Cart from './Cart.js';
import data from '../data.js';

class App extends React.Component {
    constructor(props){
        super()
    }
    render(){
        console.log(data.product);
        return <>
            <Sidebar products={data.product} />
            <Component products={data.product} />
            <Cart products={data.product} />
        </>
    }
}

export default App;