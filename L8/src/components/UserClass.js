import React from "react";
class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           useData:{}
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ramanrdx14");
        const json = await data.json();
        this.setState({
            useData : json
        })
    }
    render(){

        return (
            <div>
                <img src={this.state.useData.avatar_url} alt="" height={50} width={50}></img>
                <h2>Name :{this.state.useData.type}</h2>
                <h2>Location : {this.state.useData.location}</h2>
                {console.log(this.state.useData)}
            </div>
        );
    }
}
export default Userclass;