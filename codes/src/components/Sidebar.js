import React from 'react';
class Sidebar extends React.Component {
    constructor(props){
        super()
    }
    render(){
        console.log(this.props.products)
        return <>
            <h1>hello sidebar</h1>
        </>
    }
}

export default Sidebar;