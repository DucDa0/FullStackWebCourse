import React, { Component } from 'react';
import '../css/TabMenu.css';
class TabMenu extends Component {
    render() {
        return (
            <div className="TabMenu">
                <div className="TabMenu-wrap">
                    <div className="items">
                        <div class="home"></div>
                        {/* <img className="icons" src={home} alt="Kiwi standing on oval"/> */}
                        <div className="text">HOME</div>
                    </div>
                    <div className="items">
                        <div class="settings"></div>
                        {/* <img className="icons" src={settings} alt="Kiwi standing on oval"/> */}
                        <div className="text">SETTINGS</div>
                    </div>
                    <div className="items">
                        <div class="deals"></div>
                        {/* <img className="icons" src={gift} alt="Kiwi standing on oval"/> */}
                        <div className="text">DEALS</div>
                    </div>
                    <div className="items">
                        <div class="upload"></div>
                        {/* <img className="icons" src={upload} alt="Kiwi standing on oval"/> */}
                        <div className="text">UPLOAD</div>
                    </div>
                    <div className="items">
                        <div class="work"></div>
                        {/* <img className="icons" src={coffe} alt="Kiwi standing on oval"/> */}
                        <div className="text">WORK</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default TabMenu;