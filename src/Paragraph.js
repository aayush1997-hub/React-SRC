import React from "react"


class Paragraph extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }
handler=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}
    render(){
        return(
            <div style={{textAlign:"center",color:'blue'}}>
                <h2 >counter : {this.state.counter}</h2>
                <div style={{color:'#120012'}}>
                <p onClick={this.handler}>Pelase click me and count me</p>
                </div>
            </div>
        )
    }
}
export default Paragraph;