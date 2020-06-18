import React from 'react'

import './NumberDisplay.scss'

interface NumberDisplayProps {
    value: number
}

const NumberDisplay: React.FC<NumberDisplayProps> = props => {
    return(
        <div className="NumberDisplay">{props.value.toString().padStart(3, "0")}</div>
    )
}

export default NumberDisplay