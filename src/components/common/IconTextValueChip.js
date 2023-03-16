import React from "react";

export default function IconTextValueChip({ icon, text, value }) {
  return (
    <div
      style={{
        padding: '5px',
        display: "flex",
        backgroundColor: "#1f1a36",
        width: "120px",
        alignItems: "center",
        justifyContent: 'space-around',
        borderRadius: '20px'
      }}
    >
      <div style={{ backgroundColor: "white", width: '20px', height: '20px', borderRadius: '5px' }}>
        <p>{icon}</p>
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
        <p style={{ color: "#8f88ab" }}>{ text }</p>
        <p style={{ color: "white" }}>{ value }</p>
      </div>
    </div>
  );
}
