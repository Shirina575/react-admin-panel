import React from 'react'
import './sidebar.css'
import {LineStyle, Timeline, TrendingUp, PermIdentity, StorefrontOutlined

, AttachMoneyOutlined, BarChartOutlined, MailOutlined, FeedbackOutlined, ChatBubbleOutlineOutlined, ShopOutlined, Report} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sideber-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-items active">
                            <LineStyle className="sidebarIcons"/>
                            Home
                        </li>
                        <li className="sidebar-items">
                            <Timeline className="sidebarIcons"/>
                            Analytics
                        </li>
                        <li className="sidebar-items">
                            <TrendingUp className="sidebarIcons"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sideber-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-items">
                            <PermIdentity className="sidebarIcons"/>
                            Users
                        </li>
                        <li className="sidebar-items">
                            <StorefrontOutlined className="sidebarIcons"/>
                            Products
                        </li>
                        <li className="sidebar-items">
                            <AttachMoneyOutlined className="sidebarIcons"/>
                            Transactions
                        </li>
                        <li className="sidebar-items">
                            <BarChartOutlined className="sidebarIcons"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sideber-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-items">
                            <MailOutlined className="sidebarIcons"/>
                            Mail
                        </li>
                        <li className="sidebar-items">
                            <FeedbackOutlined className="sidebarIcons"/>
                            Feedback
                        </li>
                        <li className="sidebar-items">
                            <ChatBubbleOutlineOutlined className="sidebarIcons"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sideber-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-items">
                            <ShopOutlined className="sidebarIcons"/>
                            Manage
                        </li>
                        <li className="sidebar-items">
                            <Timeline className="sidebarIcons"/>
                            Analytics
                        </li>
                        <li className="sidebar-items">
                            <Report className="sidebarIcons"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
