import React from 'react'
import StoreActionButton from '../../../../../components/skinStoreActionButtons/StoreActionButton'

export default function SkinStoreActionButtons() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ margin: '10px' }}>
      <StoreActionButton btnText={"Sell Skins"} />
      </div>
      <div style={{ margin: '10px' }}>
      <StoreActionButton btnText={"Buy Skins" } isFilled />
      </div>
    </div>
  )
}
