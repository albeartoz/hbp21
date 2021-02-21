import { dark } from '@material-ui/core/styles/createPalette';
import React from 'react';
import Alert from 'react-bootstrap/Alert'

// fields: props.date: current weekday, props.risk: array of risks
const Weekday = (props) => {
    let weekday = props.date - 1
    return(
        <div>
            {props.risk.map((value) => {
                weekday += 1;
                return(
                    <Alert variant='dark'>
                        On {dateToString(weekday)}, your risk value is {value}
                    </Alert>
                    
                )
        })}
        </div>
    )
}

const dateToString = (num) => {
    const weekday = num % 7;
    switch(weekday) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return new RangeError();
    }
}

export default Weekday;