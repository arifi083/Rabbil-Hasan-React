import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const AlertMe=(a)=>{
   alert(a);
}


const Arrow=()=>{
    return(
       <button onClick={AlertMe.bind(this,"i am from arrow function")} className="btn btn-danger">my button</button> 
    );
}
export default Arrow;