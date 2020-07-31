import React, { Component} from 'react'
import classNames from 'classnames'
import '../css/SearchBox.css'


const defaultBC={borderColor: 'rgba(124, 146, 205, 0.7)'};
const changeBC={borderColor: '#F00'};
export default class SearchBox extends Component {
    constructor(){
        super();
        this.state={
            overWord: defaultBC
        }
        this.phoneValidate=this.phoneValidate.bind(this);
    }
    phoneValidate(){
        const input=document.getElementById('input');
        let value=input.value;
        if(!value.length){
            this.setState({overWord: defaultBC});
        }
        else if(value.length>=3 && value.length<=10){
            if(value[0]!=='0' || value[1]!=='9' || value[2]!=='0'){
                this.setState({overWord: changeBC});
            }else{
                this.setState({overWord : defaultBC});
            }
        }
        else if(value.length>10){
            this.setState({overWord : changeBC});
        }
        else{
            this.setState({overWord: defaultBC});
        }

    }
    render() {
        const {overWord}=this.state;
        const {onFocused,isFocused}=this.props;
        return (
            <div className="SearchBox">
                <div className="SearchBox-wrap">
                    <div className="SearchBox-content" style={overWord}>
                        <div className="SearchBox-box">
                            <input onFocus={onFocused} onKeyUp={this.phoneValidate}  id="input" placeholder="Type something to trap...." type="text"/>
                            <div className={classNames('search',{isFocus: isFocused})}>
                                <a href="/search" style={{textDecoration: "none", color: "white"}}><i className="fa fa-search"  aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
