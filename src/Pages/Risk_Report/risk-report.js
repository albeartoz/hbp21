import './risk-report.css'
import React from 'react';
import Weekday from '../../Components/Weekday/weekday'
// Props: longitude, latitude, name of location
/*
* props.long: number -> longitude
* props.lat: number -> latitude
* props.name: string -> name of location
*/
const RiskReport = (props) => {
    return (
        <div className="App">

            <Weekday date={0} risk={[12, 14, 73, 25, 0, 45, 66]} />
        </div>
    )
}

export default RiskReport;