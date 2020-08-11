import React, { Component } from 'react'
import NumberContexts from '../Contexts/NumberContexts'
export default class NumberProvider extends Component {
    constructor(){
        super();
        this.state={
            count: 96
        };
        this.updateCount=this.updateCount.bind(this);
    }
    updateCount(){
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <NumberContexts.Provider value={{
                number: this.state.count,
                updateNumber: this.updateCount
            }}>
                {this.props.children}
            </NumberContexts.Provider>
        )
    }
}
