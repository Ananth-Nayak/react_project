import { Outlet } from "react-router-dom";
import ProfCls from "./ProfileClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        console.log("Parent componentDid")

    }
    render(){
        console.log("Parent render")

        return (
            <div>
            <h1>About us page</h1>
            <ProfCls name=" first child" />
            <ProfCls name=" second Child" />
         </div>
        )
    }
}

export default About;

/**
 *Parent constructor
 Parent render
child construcor first child
child render first child
child construcor second Child
child render second Child
child componentDid first child
child componentDid second Child 
Parent componentDid
 */