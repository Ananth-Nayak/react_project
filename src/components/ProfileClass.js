import React from "react";
import { json } from "react-router-dom";


class Profile extends React.Component{

    constructor(props){
        super(props)

        this.state={
            userInfo:{
                name:"",
                location:""
            }
        }
    }
   async componentDidMount(){
    const data=await fetch("https://api.github.com/users/Ananth-Nayak")
    const json=await data?.json();
    console.log(json)
    this.setState({
        userInfo:json    
   });

   }

  

    render(){
        const creator=this.state.userInfo;
        return (<div>
            <h2>Profile Class Component</h2>
            <img src={creator.avatar_url} />
            <h2>Name: {creator.name}</h2>
            <h2>Location: {creator.location}</h2>

            </div>
        )
    }
}

export default Profile;
