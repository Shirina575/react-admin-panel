import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
import {userData} from "../../data"
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="active user"/>
            <div className="home-widgets">
                <WidgetSmall/>
                <WidgetLg/>
            </div>
        </div>
    )
}
