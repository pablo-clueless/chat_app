import React from 'react'

import { Alert } from './'
import { AddChannel, LoadingIcon } from '../assets'

const TeamChannelList = ({children, error = false, loading, type, isCreating, setIsCreating, setIsEditing, setCreateType, setToggleContainer}) => {
  if(error) {
    return type === 'team' ? (
    <div className='team-channel-list'>
      <p className="team-channel-list__message">
        Connetion error, please wait a moment and try again.
      </p>
    </div>
    ) : null
  }

  if(loading) {
    return (
      <div className='team-channel-list'>
        <p className="team-channel-list__message loading">
          {type === 'team' ? 'Channels' : 'Messages '} <LoadingIcon ml={10} /> 
        </p>
      </div>
    )
  }

  return (
    <>
    {error && (<Alert type='error' message={error.message} />)}
    <div className='team-channel-list'>
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
        <AddChannel isCreating={isCreating} setIsCreating={setIsCreating} setIsEditing={setIsEditing} setCreateType={setCreateType} type={type === 'team' ? 'team' : 'messaging'} setToggleContainer={setToggleContainer} />
      </div>
      {children}
    </div>
    </>
  )
}

export default TeamChannelList