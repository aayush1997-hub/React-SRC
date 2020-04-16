import React from 'react'
import "./App.css";

class Stopwatch extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    render() {
        return (
            <div className="stopwatch">
                <div className="stopwatch-header">
                    Stop Watch
             </div>
             <h1 style={{color:'white'}}>{this.state.timerTime}</h1>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button onClick={this.startTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button onClick={this.stopTimer}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.startTimer}>Resume</button>
                )}&nbsp;
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.resetTimer}>Reset</button>
                )}
            </div>
        )
    }
}
export default Stopwatch;