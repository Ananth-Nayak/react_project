import React from "react";


class Profile extends React.Component{

    constructor(props){
        super(props)

        this.state={
            count:0
        }
        console.log("child construcor"+ this.props.name)
    }
    componentDidMount(){
        console.log("child componentDid" + this.props.name)

    }

    render(){
        const {count}=this.state;
        const {name}=this.props;
        console.log("child render" +this.props.name)
        return (<div>
            <h2>Profile Class Component</h2>
            <h3>{name}</h3>
            <h3>{count}</h3>
            <button onClick={()=>{
                this.setState({  //this is how we use setState in class component
                    count:2
                })
            }}>Countclass</button>
            </div>
        )
    }
}

export default Profile;