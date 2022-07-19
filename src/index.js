import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import Contact from "./pages/Contact"

const Car= () =>
{
    const [car ,setCar]=useState
    ({type : "suv",

     brand:"mustang",
     year:2021,
        color:"red"});

    const update = (car)=>{
        const car1={...car,brand:"maruti",color:"pink"};
        setCar(car1);
    }

    return(
        <>
            <p>this is a {car.type} and brand is {car.brand} of color {car.color} and year is {car.year}</p>
            <button onClick={() =>update(car)}>change</button>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Contact />);
const more=ReactDOM.createRoot(document.getElementById("more"));
more.render(<Car />);