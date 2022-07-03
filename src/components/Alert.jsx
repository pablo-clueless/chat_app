import React from 'react'

import { CloseCreateChannel } from '../assets'

const Alert = ({type, message, onClear}) => {
    if(type === 'error') {
        return (
            <div className="alert__wrapper error">
                <p>{message}</p>
                <div className="alert__wrapper-button" onClick={onClear}>
                    <CloseCreateChannel />
                </div>
            </div>
        )
    }

    if(type === 'success') {
        return (
            <div className="alert__wrapper success">
                <p>{message}</p>
                <div className="alert__wrapper-button" onClick={onClear}>
                    <CloseCreateChannel />
                </div>
            </div>
        )
    }

  return (
    <div className="alert__wrapper">
        <p>{message}</p>
        <div className="alert__wrapper-button" onClick={onClear}>
            <CloseCreateChannel />
        </div>
    </div>
  )
}

export default Alert