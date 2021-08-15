import React, { Component } from 'react';

class Selected extends Component {
   constructor(){
       super()
       this.state={
           city1:"Dhaka",
           city2:"Barishal",
           city3:"Rajshahi",
           city4:"Rangpur",
           show:" ",
           auto:"Dhaka"
       }
   }
   onChangeHandler=(event)=>{
         var selectValue=event.target.value;
         this.setState({show:selectValue,auto:selectValue})
   }



    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default Selected;