import React, { Component } from 'react'

export default function(ImageWrap){
    return class extends Component{
        constructor(props){
            super(props);
            this.state={
                iSHover: false
            }
            this.onMouseEnter=this.onMouseEnter.bind(this);
            this.onMouseLeave=this.onMouseLeave.bind(this);
        }
        onMouseEnter(){
            this.setState({
                iSHover: true
            })
        }
        onMouseLeave(){
            this.setState({
                iSHover: false
            })
        }
        render(){
            return(
                <div style={{opacity: this.state.iSHover? 0.5 : 1}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    <ImageWrap src={this.props.src}/>
                </div>
            )
        }
    }
}
