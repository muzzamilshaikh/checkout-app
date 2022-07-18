import React from "react";
import Typography from "@mui/material/Typography";
import style, { keyframes } from "styled-components";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Box = style.div`
display:flex;
align-items:center;
gap:1%;
margin-bottom:2%;
`;
const breatheAnimation = keyframes`
from {
    transform:rotate(0deg);
}
to {
    transform:rotate(360deg);
}`;

const Animate = style.div`

animation-name: ${breatheAnimation};
animation-duration: 700ms;
animation-iteration-count: 1;

`;

export default function Invoice({ state }: any) {
  return (
    <>
      <Box>
        <Animate>
          <CheckCircleOutlineIcon style={{ color: "green" }} fontSize="large" />
        </Animate>
        <Typography
          variant="h5"
          style={{ color: "#16197B", fontWeight: "bold" }}
        >
          Invoice Paid
        </Typography>
      </Box>
      <Typography variant="body1" style={{ marginBottom: "2%" }}>
        {state?.name ? `${state?.name} your` : "Your"} Payment of €
        {localStorage.getItem("amount") && localStorage.getItem("amount")} has
        processed!
      </Typography>
      <Typography variant="body1" style={{}}>
        Thank you
      </Typography>
    </>
  );
}
