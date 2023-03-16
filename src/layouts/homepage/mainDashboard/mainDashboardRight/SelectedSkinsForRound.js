import React from 'react'
import PowerActionButton from './selectedSkinsForRound/PowerActionButton'
import PowerList from './selectedSkinsForRound/PowerList'
import SkinListRound from './selectedSkinsForRound/SkinListRound'

export default function SelectedSkinsForRound() {
  return (
    <div>
        <SkinListRound />
        <PowerList />
        <PowerActionButton />
        </div>
  )
}
