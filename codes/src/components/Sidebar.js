import React from 'react';
class Sidebar extends React.Component {
    constructor(props){
        super()
        
    }
    /* handleSizes = (value) => {
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
    } */
    render(){
        let uniqueSizes = (Array.from(new Set((this.props.products.map(product => product.availableSizes)).flat()))).sort()
        // console.log(uniqueSizes)
        return <>
            <ul className='main-sidebar' >
                {
                    uniqueSizes.map(size => <li key={size} className={(this.props.selectedSizes.some(s => s === size)) ? 'activ-yellow' : ''}  onClick={() => this.props.handleSizes(size)} >{size}</li>)
                }
            </ul>
        </>
    }
}

export default Sidebar;