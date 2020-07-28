import React, {Component} from 'react';
import '../css/RecommendedFriends.css';
import FollowFriendListItem from './FollowFriendListItem';

class RecommendedFriends extends Component{
    constructor(){
        super();
        this.friends=[
            {name: 'ducdao0906', avatar: 'https://picsum.photos/50'},
            {name: 'NgaoThui1010', avatar: 'https://picsum.photos/50'},
            {name: 'ToRieu003', avatar: 'https://picsum.photos/50'}
        ]
    }
    render(){
        return(
            <div className="friendsRec">
                <div className="friendsRec-wrap">
                    <div className="friendsRec-head">
                        <div className="friendsRec-head-title">
                            Gợi ý cho bạn
                        </div>
                        <div className="friendsRec-head-viewAll">
                            Xem tất cả
                        </div>
                    </div>
                    <div className="friendsRec-body">
                        {
                            this.friends.map((item, index)=>{
                                return <FollowFriendListItem key={index} name={item.name} avatar={item.avatar}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendedFriends;