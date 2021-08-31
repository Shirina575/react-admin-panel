import React from 'react'
import "./widgetSmall.css"
import { Visibility } from '@material-ui/icons'

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="../../images/msk.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Mst Shirina Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Show More
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="../../images/msk.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Mst Shirina Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Show More
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="../../images/msk.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Mst Shirina Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Show More
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImage" src="../../images/msk.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Mst Shirina Khatun</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Show More
                    </button>
                </li>
                
            </ul>
        </div>
    )
}
