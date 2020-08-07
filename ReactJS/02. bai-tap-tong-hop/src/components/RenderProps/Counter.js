import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            count: 0
        }
    }
    componentDidMount(){
        this.timerId=setInterval(()=>{
            this.setState({
                count: this.state.count + 1
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                {this.props.children(this.state)}
            </div>
        )
    }
}
