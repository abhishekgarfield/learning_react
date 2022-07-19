import {Outlet ,Link} from "react-router-dom";
import React , {useState} from "react";

const Contact = () =>
{
    const[color ,setColor] =useState("Red");

    return(
    <>
        <p>Hi this is {color}</p>
        <button style={{color:"white",background:"black"}}onClick={() =>setColor("blue")}>change color</button>
    </>
        )
};



export default Contact;