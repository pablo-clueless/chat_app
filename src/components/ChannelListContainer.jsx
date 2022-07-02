import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import { logouticon, icon } from '../assets/'

const cookies = new Cookies()

const Sidebar = ({ logout }) => (
    <div className='channel-list__sidebar'>
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={icon} alt="community pro" width={30} />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
          <img src={logouticon} alt="logout" width={25} />
        </div>
      </div>
    </div>
  )

const CompanyHeader = () => (
    <div className="channel-list__header">
      <p className="channel-list__header__text">
        Community Pro
      </p>
    </div>
  )

const ChannelListContainer = ({isCreating, setIsCreating, setIsEditing, setCreateType}) => {
  const logout = () => {
    cookies.remove('token')
    cookies.remove('username')
    cookies.remove('fullName')
    cookies.remove('userId')
    cookies.remove('phoneNumber')
    cookies.remove('avatarURL')
    cookies.remove('hashedPassword')

    window.location.reload()
  }

  return (
    <>
    <Sidebar logout={logout} />
    <div className="channel-list__list__wrapper">
      <CompanyHeader />
      <ChannelSearch />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList {...listProps} type='team' isCreating={isCreating} setIsCreating={setIsCreating} setIsEditing={setIsEditing} setCreateType={setCreateType} />
          )}
        Preview={(previewProps) => (
          <TeamChannelPreview {...previewProps} type='team' />
        )} />
      <ChannelList
        filters={{}}
        channelRenderFilterFn={() => {}}
        List={(listProps) => (
          <TeamChannelList {...listProps} type='messaging' isCreating={isCreating} setIsCreating={setIsCreating} setIsEditing={setIsEditing} setCreateType={setCreateType} />
          )}
        Preview={(previewProps) => (
          <TeamChannelPreview {...previewProps} type='messaging' />
        )} />
    </div>
    </>
  )
}

export default ChannelListContainer