import React from 'react'
import IconTextValueChip from '../../../../components/common/IconTextValueChip'

export default function BalanceRow() {
  return (
    <div style={{ backgroundColor: '#261e3e', padding: '10px' }}>
      <IconTextValueChip icon={"$"} text={"Balance"} value={"$1440.00"}/>
      </div>
  )
}
