import React from 'react'
import ChatLayout from './common/ChatLayout'
import LeftMenu from './common/LeftMenu'
import TopNavigation from './common/TopNavigation'
import MainDashboard from './homepage/MainDashboard'

export default function Homepage() {
  return (
    <div>
        <TopNavigation />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <LeftMenu />
        <MainDashboard />
        <ChatLayout />
        </div>
    </div>
  )
}
