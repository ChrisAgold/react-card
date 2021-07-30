// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import {
  StyledCardMain,
  StyledTextHeader,
  StyledTextBody,
  StyledCardBody,
  StyledCardHeader,
  StyledButton,
} from "../styles";

export const JobListCard = (props) => {
  const job = props.job;


  const name = job.contractorname;
  const jobName = job.defaultjobname;
  const day = job.dayofweek;
  const rate = job.hourlyrate;
  const notes = job.note;
  const agency = job.officialagencyname;
  const openJob = job.openings;
  const paidHours = job.scheduledpaidhours;
  const total = job.totalpay;

  return (
    <StyledCardMain>
      <StyledCardHeader>
        <StyledTextHeader style={{ fontSize: 30 }}>{name}</StyledTextHeader>
        <StyledTextHeader style={{ fontSize: 20 }}>{jobName}</StyledTextHeader>
      </StyledCardHeader>

      <StyledCardBody
        onClick={() => {
          //modal appear
          props.setShowModal(true)
        }}
      >
        <div
          style={{
            flexDirection: "column",
            textAlign: "left",
            padding: "3%",
            color: "lightgrey",
            fontSize: "1em",
            fontWeight: "600",
            // lineHeight: '1',
            paddingBottom: ".5em",
            margin: "0 0 0.142857143em",
            borderTop: "2px solid #753BBD",
          }}
        >
          <div>Day: {day}</div>
          <div>Hourly Rate: {rate}</div>
          <div>Agency: {agency}</div>
          <div>Opening: {openJob}</div>
          <div>Hours: {paidHours}</div>
        </div>
        <div
          style={{
            flexDirection: "column",
            textAlign: "left",
            padding: "3%",
            color: "lightgrey",
            fontSize: "1em",
            fontWeight: "600",
            // lineHeight: '1',
            paddingBottom: ".5em",
            margin: "0 0 0.142857143em",
            borderTop: "2px solid #753BBD",
          }}
        >
          <div>Notes: {notes}</div>
          <div style={{ fontWeight: "bold", fontSize: "18px", color: "white" }}>
            Total Cost: {total}
          </div>
          {/*<StyledButton>View Job</StyledButton>*/}
        </div>
      </StyledCardBody>

      {/* <StyledTextHeader>{name}</StyledTextHeader>
    <StyledTextHeader style={{fontSize:20}}>{jobName}</StyledTextHeader>
    <StyledTextBody>{rate}</StyledTextBody>
    <StyledTextBody>{total}</StyledTextBody>

    <div>{notes}</div>
    <div>{agency}</div>
    <div>{openJob}</div>
    <div>{paidHours}</div> */}
    </StyledCardMain>
  );
};
//NOTES
// Rounded corners
// drop shadow
// neomorphism
// material design
// apple design language
// fluent design
