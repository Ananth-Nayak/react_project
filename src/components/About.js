import AboutPageComponent from "./AboutPageContent";
import ProfileClass from "./ProfileClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.timer=setInterval(() => {
            console.log("hello Ananth")
        },1000);
    };
    componentDidUpdate(prevProps,prevState){
        
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
       

        return (
            <div>
            <AboutPageComponent/>
            <ProfileClass />
         </div>
        )
    }
}

export default About;

