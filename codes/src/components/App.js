import React from 'react';
import Sidebar from './Sidebar.js';
import Component from './Component.js';
import Cart from './Cart.js';
import data from '../data.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedSizes:[],
            addToCartBtnProducts : [],
            totalAm:0,
        };
    }
    handleAddToCartBtn = (sortedProducts,id) => {
        
        if(this.state.addToCartBtnProducts.every(p => p.id !== id)){
            this.setState((prev) => {
                return {
                    addToCartBtnProducts: prev.addToCartBtnProducts.concat({...sortedProducts.find(p => p.id === id),quantity:1}),
                    
                }
            })
        }
        this.setState((prev) => {
            return {
                totalAm: prev.addToCartBtnProducts.reduce((acc,p) => {return acc = acc + p.price*p.quantity},0)
            }
        })
    }
    handleSizes = (value) => {
        if(this.state.selectedSizes.every(s => s !== value)){
            this.setState((prevState) => {
                return {
                    selectedSizes: prevState.selectedSizes.concat(value),
                }
            })
        }else {
            this.setState((prevState) => {
                return {
                    selectedSizes: prevState.selectedSizes.filter(s => s !== value),
                }
            })
        }
    }
    handleQty = (id,value,p) => {
        if(p.quantity < 1){return this.handleCrossBtn(p.id)}; // need to fix this issue becoz when qty reaches zero after that it will delete that item.
        if(value === "plus"){
            this.setState((prev) => {
                // if(prev.addToCartBtnProducts.some(p => p.quantity < 0))return;
                let updatedCartP = [...prev.addToCartBtnProducts].map(p => {
                    if(p.id === id){
                        return {
                            ...p,
                            quantity:  p.quantity + 1,
                        }
                    }else{
                        return p;
                    }
                })
                return {
                    addToCartBtnProducts: updatedCartP,
                    
                }
            })
        }
        if(value === "minus"){
            this.setState((prev) => {
                // if(prev.addToCartBtnProducts.some(p => p.quantity < 0))return;
                let updatedCartP = [...prev.addToCartBtnProducts].map(p => {
                    if(p.id === id){
                        return {
                            ...p,
                            quantity: p.quantity - 1,
                        }
                    }else{
                        return p;
                    }
                })
                return {
                    addToCartBtnProducts: updatedCartP,
                    
                }
            })
        }
        this.setState((prev) => {
            return {
                totalAm: prev.addToCartBtnProducts.reduce((acc,p) => {return acc = acc + p.price*p.quantity},0)
            }
        })
    

    }
    handleCrossBtn = (id) => {
        this.setState((prev) => {
            return {
                addToCartBtnProducts: prev.addToCartBtnProducts.filter(p => p.id !== id)
            }
        })
        this.setState((prev) => {
            return {
                totalAm: prev.addToCartBtnProducts.reduce((acc,p) => {return acc = acc + p.price*p.quantity},0)
            }
        })
    }

    render(){
        // console.log(data.product);
        return <main className='main'>
            <Sidebar products={data.product} selectedSizes={this.state.selectedSizes} handleSizes={(size) => this.handleSizes(size)} />
            <Component products={data.product} selectedSizes={this.state.selectedSizes} handleAddToCartBtn={(sortedProducts,id) => this.handleAddToCartBtn(sortedProducts,id)} />
            <Cart products={data.product} addToCartBtnProducts={this.state.addToCartBtnProducts} handleQty={(id,value,p) => this.handleQty(id,value,p)} handleCrossBtn={(id) => this.handleCrossBtn(id)} totalAm={this.state.totalAm}/>
        </main>
    }
}

export default App;