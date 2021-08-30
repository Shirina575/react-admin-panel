import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="top-wrapper">
                <div className="top-left">
                    <span className="logo">MSKAdmin</span>
                </div>
                <div className="top-right">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="/images/msk.jpg" alt="" className="topAvater" />
                </div>
            </div>
        </div>
    )
}
