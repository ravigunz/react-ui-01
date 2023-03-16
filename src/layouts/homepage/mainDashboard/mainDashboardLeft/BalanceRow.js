import React from 'react'
import IconTextValueChip from '../../../../components/common/IconTextValueChip'
import IconValueChip from '../../../../components/common/IconValueChip'

export default function BalanceRow() {
  return (
    <div style={{ backgroundColor: '#261e3e', padding: '10px' }}>
      <IconTextValueChip icon={"$"} text={"Balance"} value={"$1440.00"}/>
      <br />
      <IconValueChip value={'$12.00'}/>
      </div>
  )
}
