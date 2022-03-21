import React from 'react';
class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderbyValue: "",
        }
    }
    handleOrderBy = (event) => {
        let value = event.target.value;
        this.setState((prevState) => {
            return {
                orderbyValue: value,
            }
        })
    }
    getSortedProducts = (products) => {
        let clonedProducts = [...products];
        if(this.state.orderbyValue === "highest"){
            clonedProducts.sort((a,b) => b.price - a.price);
            return clonedProducts;
        }
        if(this.state.orderbyValue === "lowest"){
            clonedProducts.sort((a,b) => a.price - b.price);
            return clonedProducts;
        }
        return clonedProducts;
    }
    getSizeSelectedProducts = (products) => {
        let allProducts = [...products];
        let allSizes = [...this.props.selectedSizes];
        // console.log(allSizes);
        if(allSizes.length !== 0){
            allProducts = allProducts.filter(function(p){
                for(let size of allSizes){
                    if(p.availableSizes.includes(size)){
                        return true
                    }else{
                        return false;
                    }
                }
            })
        }
        // console.log(allProducts);
        return allProducts;
        
    }
    render(){
        let sortedProducts = this.getSortedProducts(this.getSizeSelectedProducts(this.props.products));
        // transferSortedArr(sortedProducts);
        return <section className='main-component'>
            <h1  className='products-found' >{sortedProducts.length} products found</h1>
            <div className='orderby' >
                <span>Sort by</span>
                <select onChange={this.handleOrderBy} value={this.state.orderbyValue} >
                    <option>All Products</option>
                    <option value="highest">Highest to Lowest</option>
                    <option value="lowest" >Lowest to Highest</option>
                </select>
            </div>
            <ul className='product-ui'>
                {
                    sortedProducts.map(product => {
                        return (
                            <li key={product.id} >
                                <div>
                                    <img src={`/static/products/${product.sku}_1.jpg`} alt={product.sku} />
                                    {product.isFreeShipping ? <span>Free Shipping</span> : ""}
                                </div>
                                <h2>{product.title}</h2>
                                <hr />
                                <div className='price'>{product.currencyFormat + product.price}</div>
                                <button onClick={() => this.props.handleAddToCartBtn(sortedProducts,product.id)} >Add to Cart</button>
                            </li>
                        )
                    })
                }
                
            </ul>
        </section>
    }
}




export default Component;