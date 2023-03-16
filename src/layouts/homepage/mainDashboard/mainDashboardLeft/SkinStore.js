import React from 'react'
import SkinsList from './skinStore/SkinsList'
import SkinStoreActionButtons from './skinStore/SkinStoreActionButtons'

export default function SkinStore() {
  return (
    <div style={ {backgroundColor: '#1f1a36'}}>
      <SkinsList />
      <SkinStoreActionButtons />
    </div>
  )
}
