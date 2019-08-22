import React, { Component } from 'react';
import "./Sidebar.css";

class Sidebar extends Component {
    state = { 
        icons: Array(10).fill({
            id:2,
            image: "http://pixelartmaker.com/art/387c850f1455fab.png"
        })
    }

    
    render() { 
        return (
            <div id="sidebarWrapper">
                <div id="sidebarVisibleWrapper">
                    {this.state.icons.map((icon,index) => {
                        return (
                            <div id="profileObjectWrapper">
                                <div id="profileImageWrapper" key={index}>
                                    <img className="friendIconClass" src={icon.image} />
                                </div>
                                <div id="profileNameWrapper">
                                    <span id="profileNameText">Test</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
 
export default Sidebar;