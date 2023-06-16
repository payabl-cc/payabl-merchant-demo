import React from "react";
import * as S from "./styles";
import BodyText from "../Styleguide/BodyText";
import { ReactSVG } from "react-svg";

const PaymentButton = ({ paymentLinkId }) => {
  const openPaymentWindow = () => {
    var windowFeatures = "height=600,width=600";
    var targetURL = `http://localhost:3000/pay?id=${paymentLinkId}`;

    window.open(targetURL, "_blank", windowFeatures);
  };

  return (
    <S.PaymentButtonContainer onClick={() => openPaymentWindow()}>
      <ReactSVG src="assets/payabl-transparent.svg" />
      <BodyText size="small" fontStyle="light" margin="0 0 0 0.5rem">
        Pay with Payabl.cc
      </BodyText>
    </S.PaymentButtonContainer>
  );
};

export default PaymentButton;
