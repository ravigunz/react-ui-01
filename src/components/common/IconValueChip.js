import React from 'react'

export default function IconValueChip({ value }) {
  return (
    <div
      style={{
        padding: '5px',
        display: "flex",
        backgroundColor: "#292043",
        width: "120px",
        alignItems: "center",
        justifyContent: 'space-around',
        borderRadius: '20px'
      }}
    >
      <div style={{ backgroundColor: "white", width: '20px', height: '20px', borderRadius: '5px' }}>
        <p>$</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "start",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "white" }}>{ value }</p>
      </div>
    </div>
  )
}
