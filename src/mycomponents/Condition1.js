import React,{Component} from 'react'

class Condition1 extends Component{
    constructor(){
        super()

        this.state={
            login:true
        }
    }
    render(){
        return(
            this.state.login? <h1>i am first</h1> : <h1>i am second</h1>
        )
    }
}
export default Condition1; 