import React from 'react'
import BalanceRow from './mainDashboardLeft/BalanceRow'
import GraphWithSelectPower from './mainDashboardLeft/GraphWithSelectPower'
import SkinStore from './mainDashboardLeft/SkinStore'

export default function MainDashboardLeft() {
  return (
    <div>
        <GraphWithSelectPower />
        <BalanceRow />
        <SkinStore />
    </div>
  )
}
