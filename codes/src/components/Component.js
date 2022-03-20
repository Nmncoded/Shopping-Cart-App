import React from 'react';
class Component extends React.Component {
    constructor(props){
        super()
    }
    render(){
        console.log(this.props.products)
        return <>
            <h1>hello component</h1>
        </>
    }
}

export default Component;