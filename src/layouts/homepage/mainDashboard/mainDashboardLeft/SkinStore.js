import React from 'react'
import SkinsList from './skinStore/SkinsList'
import SkinStoreActionButtons from './skinStore/SkinStoreActionButtons'

export default function SkinStore() {
  return (
    <div>
      <SkinsList />
      <SkinStoreActionButtons />
    </div>
  )
}
