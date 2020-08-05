import React, { Component } from 'react'
import '../css/BookList.css'
export default class BookList extends Component {
    render() {
        const {title, description, bookImgUrl}=this.props;
        return (
            <div className="BookList-item">
                <div className="BookList-wrap">
                    <img className="img" src={bookImgUrl} width="100%" height="150" alt="books"/>
                   <div className="info">
                        <h2 className="book-name">{title}</h2>
                        <p className="book-description">{description}</p>
                       <a href="/add-to-cart" className="btn-add-cart">Add to cart</a>
                   </div>
                </div>
            </div>
        )
    }
}
