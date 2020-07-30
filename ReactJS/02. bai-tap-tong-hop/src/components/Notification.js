import React, { Component } from 'react'
import '../css/Notification.css'

export default function Notification(props){
    const { hasUnread } = props;
    return(
        <div className="Notification">
            <div className="Notification-wrap">
                <div className="Notification-content">
                    <div className="icon"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
                    {
                        hasUnread && <div className="status"></div>
                    }
                    <div className="avatar-wrap">
                        <img src="https://picsum.photos/50" alt="avatar" className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default class Notification extends Component {
//     render() {
//         const { hasUnread } = this.props;
//         return (
//             <div className="Notification">
//                 <div className="Notification-wrap">
//                     <div className="Notification-content">
//                         <div className="icon"><i className="fa fa-bell-o" aria-hidden="true"></i></div>
//                         {
//                             hasUnread && <div className="status"></div>
//                         }
//                         <div className="avatar-wrap">
//                             <img src="https://picsum.photos/50" alt="avatar" className="avatar"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
