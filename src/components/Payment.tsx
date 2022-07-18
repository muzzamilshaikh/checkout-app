import React, { useState } from "react";
import {
  Typography,
  TextField,
  Divider,
  Grid,
  Button,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { usePaymentInputs } from "react-payment-inputs";
import { useNavigate } from "react-router-dom";
import style from "styled-components";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { StyledButton } from "./EMI";

const DateTime = style.div`
display:flex;
gap:10%;
`;
const Date = style.div`
`;
const Time = style.div``;
const StyleDivider = style(Divider)`
width:50%;
margin-top:2% !important;
@media (max-width: 768px) {
    width:100%;
    
    
  }
`;

interface IState {
  cardNumber: string;
  expiryDate: string;
  name: string;
  cvc: string;
}
export default function Payment({ globalSetState, globalState }: any) {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<IState>({
    cardNumber: "",
    expiryDate: "",
    name: "",
    cvc: "",
  });
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();
  const { erroredInputs, touchedInputs } = meta;

  const handleChange = (e: any) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  function handleClick() {
    if (state.name !== "") {
      globalSetState({
        ...globalState,
        name: state.name,
      });
    }

    if (meta.error === undefined) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        navigate("/invoice");
      }, 5000);
    }
  }
  return (
    <>
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" size={40} />
        </Backdrop>
      </div>
      <Typography variant="h6" style={{ marginBottom: "2%" }}>
        Your Payment
      </Typography>
      <DateTime>
        <Date>
          <Typography variant="caption" style={{ color: "gray" }}>
            Valid time
          </Typography>
          <Typography variant="body1">30 days</Typography>
        </Date>
        <Time>
          <Typography variant="caption" style={{ color: "gray" }}>
            Date
          </Typography>
          <Typography variant="body1">20/08/2022</Typography>
        </Time>
        <div>
          <Typography variant="caption" style={{ color: "gray" }}>
            Payable Amount
          </Typography>
          {/* <Typography variant="body1">€{globalState.amount}</Typography> */}
          <Typography variant="body1">
            €{localStorage.getItem("amount") && localStorage.getItem("amount")}
          </Typography>
        </div>
      </DateTime>
      <StyleDivider />
      <Typography
        variant="body1"
        style={{ marginBottom: "2%", marginTop: "2%" }}
      >
        CREDIT/DEBIT CARD
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={11} md={12}>
          <Grid item md={6}>
            <TextField
              name="cardNumber"
              variant="outlined"
              value={state.cardNumber}
              inputProps={getCardNumberProps({
                onChange: handleChange,
              })}
              fullWidth
              InputProps={{
                endAdornment: <CreditCardIcon />,
              }}
              error={
                erroredInputs.cardNumber !== undefined &&
                touchedInputs.cardNumber
              }
              helperText={touchedInputs.cardNumber && erroredInputs.cardNumber}
            />
          </Grid>
        </Grid>
        <Grid item xs={11} md={12}>
          <Grid item md={6}>
            <TextField
              value={state.name}
              onChange={handleChange}
              name="name"
              variant="outlined"
              placeholder="your name (optional)"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={11} md={12}>
          <Grid container spacing={1}>
            <Grid item xs={6} md={3}>
              <TextField
                name="expiryDate"
                variant="outlined"
                value={state.expiryDate}
                inputProps={getExpiryDateProps({ onChange: handleChange })}
                fullWidth
                error={
                  erroredInputs.expiryDate !== undefined &&
                  touchedInputs.expiryDate
                }
                helperText={
                  touchedInputs.expiryDate && erroredInputs.expiryDate
                }
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                name="CVC"
                variant="outlined"
                value={state.cvc}
                inputProps={getCVCProps({ onChange: handleChange })}
                error={erroredInputs.cvc !== undefined && touchedInputs.cvc}
                helperText={touchedInputs.cvc && erroredInputs.cvc}
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <StyledButton variant="contained" onClick={handleClick}>
            Confirm Payment
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
}
