import React from 'react'
import PlayersInfo from './mainDashboardRight/PlayersInfo'
import RoundInfoRow from './mainDashboardRight/RoundInfoRow'
import SelectedSkinsForRound from './mainDashboardRight/SelectedSkinsForRound'

export default function MainDashboardRight() {
  return (
    <div>
      <SelectedSkinsForRound />
      <RoundInfoRow />
      <PlayersInfo />
    </div>
  )
}
