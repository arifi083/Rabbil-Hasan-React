import React,{Component} from 'react'

class Refresh extends Component{
    constructor(){
        super()
        this.RefreshNow=this.RefreshNow.bind(this);
    }
    RefreshNow(){
        this.forceUpdate();
    }

    render(){
        return(
            <div>
                <button onClick={this.RefreshNow}>Refres Button click</button>
                <h1>here click random method:{Math.random()}</h1>
            </div>
        );
    }
} 
export default Refresh;