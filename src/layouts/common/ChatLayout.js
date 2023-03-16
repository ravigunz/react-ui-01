import React from 'react'
import ChatHistory from './chatLayout/ChatHistory'
import ChatInfo from './chatLayout/ChatInfo'
import CommunityInfo from './chatLayout/CommunityInfo'
import MessageSendInput from './chatLayout/MessageSendInput'

export default function ChatLayout() {
  return (
    <div>
      <ChatInfo />
      <CommunityInfo />
      <ChatHistory />
      <MessageSendInput />
    </div>
  )
}
