import React, { Component } from 'react'

export default class LifeCycles extends Component {
    constructor(){
        console.log('Count constructor')
        super();
        this.state={
            count: 0
        }
        this.upadateCount=this.upadateCount.bind(this);
    };
    upadateCount(){
        this.setState(({count})=>({count: count+1}))
    };
    componentDidUpdate(){
        console.log('Count did upadte');
    }
    componentDidMount(){
        console.log('Count did mount');
    }
    componentWillUnmount(){
        console.log('Count will unmount');
    }
    render() {
        console.log('Count render')
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.upadateCount}>+</button>
            </div>
        )
    }
}
