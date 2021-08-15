import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super()
        this.state={
            fname:" ",
            lname:" ",
            email:" ",
            mobile:" "
        }
    }
    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue});

        if(inputName==="fname"){
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fname:"first name is not valid"});
            }
        }
        if(inputName==="lname"){
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({lname:"last name is not valid"});
            }
        }
        if(inputName==="email"){
            var namePattern=/\S+@\S+\.\S+/;
            if(!namePattern.test(inputValue)){
                this.setState({email:"email name is not valid"});
            }
        }
        if(inputName==="mobile"){
            if(!Number(inputValue)){
                this.setState({mobile:"mobile number is not valid"})
            }
        }

    }



    render() {
        return (
            <div>
                <p>First Name:{this.state.fname}</p>
                <p>Last Name:{this.state.lname}</p>
                <p>Email:{this.state.email}</p>
                <p>Mobile Num:{this.state.mobile}</p>
                <form>
                    <input  onChange={this.onChangeHandler} name="fname" type="text" placeholder="first name"></input><br></br>
                    <input  onChange={this.onChangeHandler} name="lname" type="text" placeholder="last name"></input><br></br>
                    <input  onChange={this.onChangeHandler} name="email" type="text" placeholder="email"></input><br></br>
                    <input  onChange={this.onChangeHandler} name="mobile" type="text" placeholder="mobile"></input><br></br>
                    <input  name="submit" type="submit" value="save now"></input><br></br>
                </form>
                
            </div>
        );
    }
}

export default Signup;