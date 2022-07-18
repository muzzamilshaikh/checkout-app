import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import style from "styled-components";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";

const StyledBox = style(Box)`
height:35vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:5%;
@media (max-width: 768px) {
  height:200px;
}
`;

const StyledPaper = style(Paper)`
height: 9vh; 
min-height:50px !important;
width: 30vw;
min-width:350px;
display:flex;
justify-content:space-between;
align-items:center;
padding-right:2%;
padding-left:1%;
border-radius:10px !important;
@media (max-width: 768px) {
  width:90%;
  height: 7vh;
  min-width:300px;
  
}
`;

export const StyledButton = style(Button)`
background-color:#363BDB !important;
`;
export default function EMI() {
  const [emi, setEmi] = useState("");

  const handleChange = (event: any) => {
    setEmi(event.target.value);
  };
  let navigate = useNavigate();
  function handleClick() {
    if (emi !== "") {
      localStorage.setItem("amount", emi);
      navigate("/payment");
    }
  }
  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "2%" }}>
        Choose Your Months
      </Typography>

      <StyledBox>
        <StyledPaper elevation={2}>
          <div>
            <input
              type="radio"
              name="payment"
              value="2333.3"
              checked={emi === "2333.3"}
              onChange={handleChange}
            />
            <label htmlFor="payment1">1 payment due</label>
          </div>
          <label htmlFor="payment1">€2333.3</label>
        </StyledPaper>
        <StyledPaper elevation={2}>
          <div>
            <input
              type="radio"
              name="payment"
              value="2333.3"
              id="payment2"
              checked={emi === "2333.3"}
              onChange={handleChange}
            />
            <label htmlFor="payment2">2 payment</label>
          </div>
          <label htmlFor="payment2">€2333.3</label>
        </StyledPaper>
        <StyledPaper elevation={2}>
          <div>
            <input
              type="radio"
              name="payment"
              value="2333.3"
              id="payment3"
              checked={emi === "2333.3"}
              onChange={handleChange}
            />
            <label htmlFor="payment3">3 payment</label>
          </div>
          <label htmlFor="payment3">€2333.3</label>
        </StyledPaper>
      </StyledBox>
      <StyledButton
        variant="contained"
        endIcon={<EastIcon />}
        onClick={handleClick}
      >
        Continue
      </StyledButton>
    </>
  );
}
