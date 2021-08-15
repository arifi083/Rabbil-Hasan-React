import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewDemo extends Component {

    myFun(){
       var container=document.getElementById("myID");
       var element=<h1>My Name is Atif Hasan,i am from ReactDOM</h1>
       var callback=function(){
           alert("hi i am callback");
       }

       ReactDOM.hydrate(element,container,callback);

    }




    render() {
        return (
            <div>
                <button onClick={this.myFun}>change</button>
                <h1 id="myID">My Name is Arif Islam</h1>
            </div>
        );
    }
}

export default NewDemo;