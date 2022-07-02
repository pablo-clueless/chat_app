import React from 'react'
import { useChatContext } from 'stream-chat-react'

import { UserList } from './'
import { CloseCreateChannel } from '../assets'

const ChannelNameInput = ({channelName='',  setChannelName}) => {
  const handleChange = (e) => {
    e.preventDefault()

    setChannelName(e.target.value)
  }
  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input type="text" value={channelName} onChange={handleChange} placeholder='Channel-name (no spaces)' />
      <p>Add Memebers</p>
    </div>
  )
}

const CreateChannel = () => {
  return (
    <div>

    </div>
  )
}

export default CreateChannel