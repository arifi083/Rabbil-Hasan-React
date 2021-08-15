import React,{Component} from 'react'



class Hello extends Component{
    constructor(){
        super()

        this.state={
            name:"Arif islam"
        }
    }
    changeName(a){
        this.setState({name:a})
    }
 
    render(){
        return <div>
            <h1>My Name is:{this.state.name}</h1>
            <button onClick={this.changeName.bind(this,'Rabbil hasan')}>change Name</button>

           
        </div>
    }
}
export default Hello;

