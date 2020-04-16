import React from "react"


class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          status:false,
          count:0.0
        }

    }
    clickStartHandler=()=>{
        this.time=setInterval(()=>{ this.setState({
            status:true,
            count:this.state.count+1
        })},100)
       
    }
    clickStopHandler=()=>{
       clearInterval(this.time) 
               
    }
        
    
    clickRestartHandler=()=>{
        this.setState({
            count:0
        })
    }
    render() {
        return (
            <div style={{textAlign:"center"}}>
           <h1>Stop Watch</h1>
           <h3>{this.state.count}</h3>
           <div className="button">
           <input type ="button" value="start" onClick={this.clickStartHandler} />
           <input type="button" value="stop" onClick={this.clickStopHandler} />
           <input type="button" value="Restart" onClick={this.clickRestartHandler} />
           </div>
           </div>
          
        
        )
    }
}
export default Timer;
