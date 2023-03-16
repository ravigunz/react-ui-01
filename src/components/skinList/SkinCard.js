import React from "react";

export default function SkinCard({
  factoryType,
  cardChipColor,
  image,
  title,
  price,
  isSelected,
}) {
  return (
    <div
      style={{
        borderRadius: "25px",
        backgroundColor: "#251d3a",
        padding: "15px",
        minWidth: "200px",
        textAlign: "left",
        border: "1px solid #2c2444",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "#948cb2", fontWeight: "bold" }}>{factoryType}</p>
        <div
          style={{
            // backgroundColor: cardChipColor,
            // height: '20px',
            // width: '20px',
            borderTop: `50px solid ${cardChipColor}`,
            borderLeft: '50px solid transparent',
          }}
        ></div>
      </div>
      <div style={{ disply: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt="knife"
          width={"110px"}
        />
      </div>
      <p style={{ color: "white" }}>{title}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <p style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}>
          {price}
        </p>
        {isSelected && <div
          style={{
            backgroundColor: "#52f980",
            width: "20px",
            borderRadius: "10px",
          }}
        ></div>}
      </div>
    </div>
  );
}
