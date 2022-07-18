import React from "react";
import style from "styled-components";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

const Container = style.div`
height:100vh;
width:100%;
display:flex;
@media (max-width: 768px) {
  flex-direction: column;
  overflow-x: hidden;
}
`;

const Box = style.div`
flex-grow:1;
padding-top:10vh;
padding-left:10vh;
display:flex;
flex-direction:column;
gap:4%;
@media (max-width: 768px) {  
padding-top:0vh;
padding-left:2vh;
height:240px;
justify-content:space-evenly;
}
`;
// padding-bottom:5vh;
// padding-top:5vh;
// padding-left:2vh;

const Text = style(Typography)`
color:#fff;

`;

const StyledButton = style(Button)`
color:#fff !important;
border: 1px solid #fff !important;
`;

const Sidebar = style.div`
width:25%;
min-width:300px;
background-color:#000338;
display:flex;
@media (max-width: 768px) {
  width:100%;
  
  
}
`;

const PaymentProcess = style.div`
width:75%;
padding-left:5vh;
padding-top:10vh;
padding-bottom:5vh;
@media (max-width: 768px) {
  width:100%;
  padding-top:5vh;
  padding-left:2vh;
}
`;

const StyleRow = style.div`
@media (max-width: 768px) {
  width:40%;
}
`;
const StyleRow2 = style.div`
@media (max-width: 768px) {
  display:flex;
  justify-content:space-between;

}
`;

interface IProps {
  children?: React.ReactNode;
  amount?: string;
}
export default function CheckoutScreen({ children }: IProps) {
  return (
    <Container>
      <Sidebar>
        <Box>
          <div>
            <Text variant="h6">Transaction Summary</Text>
          </div>

          <div>
            <StyleRow2>
              <StyleRow>
                <Text variant="body1">Amount</Text>
                <Text variant="h6">€7000</Text>
              </StyleRow>
              <StyleRow>
                <Text variant="body1">Landmark</Text>
                <Text variant="body1">Corp co</Text>
              </StyleRow>
            </StyleRow2>
            <StyleRow2>
              <StyleRow>
                <Text variant="body1">Invoice number</Text>
                <Text variant="body1">2021-86674</Text>
              </StyleRow>
              <StyleRow>
                <Text variant="body1">PO number</Text>
                <Text variant="body1">26032021-000001</Text>
              </StyleRow>
            </StyleRow2>
          </div>
          <div>
            <StyledButton variant="outlined" startIcon={<DownloadIcon />}>
              Download
            </StyledButton>
          </div>
        </Box>
      </Sidebar>
      <PaymentProcess>{children}</PaymentProcess>
    </Container>
  );
}
