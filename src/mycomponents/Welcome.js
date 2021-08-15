import React,{Component} from 'react'
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css';


class Welcome extends Component{
    constructor(){
        super()

        this.state={
            name:"Arif islam",
            age:["28","30","40","45"],
            height:"5 feet 9 inch",
            weight:{
                class7:[40,45,50,60],
                class8:50,
                class9:58
            }
        }
    }
    render(){
        return <div>
            <h1>My Name is:{this.state.name}</h1>
            <h1>My Age is:{this.state.age[3]}</h1>
            <h1>My Height is:{this.state.height}</h1>
            <h1>My Weight is:{this.state.weight.class7[0]}</h1>
        </div>
    }
}
export default Welcome;
