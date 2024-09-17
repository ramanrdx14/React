import React from "react";
class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count1:1,
            count2:2
        }
    }
    render(){

        return (
            <div>
            <h2>This is class Based Componet  Name  {this.props.name}</h2>
            <h2>This is class Based Component Count {this.state.count1}</h2>
            <h2>This is class Based Component Count {this.state.count2}</h2>
            <button onClick={()=>{
                this.setState({
                    count1:this.state.count1+1,
                    count2:this.state.count2+1
                })
            }}>Counter Click</button>
            </div>
        );
    }
}
export default Userclass;