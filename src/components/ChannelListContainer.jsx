import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import icon from '../assets/icon.png'
import {AddChannel,ChannelInfo,CloseCreateChannel,InviteIcon,LightingBolt,SearchIcon} from '../assets'

const Sidebar = () => {
  <div className='channel-list__sidebar'>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={icon} alt="community pro" width={30} />
      </div>
    </div>
  </div>
}

const ChannelListContainer = () => {
  return (
    <div>
      ChannelListContainer
    </div>
  )
}

export default ChannelListContainer