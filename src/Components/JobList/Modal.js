// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
export const JobListModal = (props) => {
  //code runs here

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <div
    style={{
        backgroundColor: "white",
        borderRadius: 20,
        height: "80%",
        width: "80%",
    }}
    onClick={() => {
        props.setShowModal(false);
    }}
    />
    </div>
  );
};
