import React from 'react'
import TopNavigationLeftMenu from './topNavigation/TopNavigationLeftMenu'
import TopNavigationRightMenu from './topNavigation/TopNavigationRightMenu'

export default function TopNavigation() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <TopNavigationLeftMenu />
      <TopNavigationRightMenu />
      </div>
  )
}
