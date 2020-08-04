import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/FollowFriendListItem.css';

export default class FollowFriendListItem extends Component {
    render() {
        return (
            <div className="friendsRec-item">
                <div className="friendsRec-info">
                    <img alt="avatar" className="friendsRec-avt" src={this.props.avatar}/>
                    <div className="friendsRec-content">
                        <span className="friendsRec-name">{this.props.name}</span>
                        <span className="friendsRec-text">Gợi ý cho bạn</span>
                    </div>
                    <a className="friendsRec-follow-link" href={"/"+this.props.name}>Theo dõi</a>
                </div>
            </div>
        )
    }
}
FollowFriendListItem.propTypes={
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}