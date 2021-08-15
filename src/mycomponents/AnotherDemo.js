import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class AnotherDemo extends Component {

    changeIMG(){
        var imgID=document.getElementById("imgID");
        ReactDOM.findDOMNode(imgID).src="https://iubat.edu/wp-content/uploads/2019/07/iubat-green-campus.jpg"
    }


    
    render() {
        return (
            <div>
               <button onClick={this.changeIMG}>change image</button> <br></br>
               <img id="imgID" src="https://iubat.edu/wp-content/uploads/2019/07/Student-Moment.jpg"></img>
            </div>
        );
    }
}


export default AnotherDemo;