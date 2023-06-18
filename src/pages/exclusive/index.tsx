import React, { useEffect, useState } from "react";
import { PaymentButton } from "payabl-ui-library";
import Heading from "../../components/Styleguide/Heading";
import { payabl } from "../_app";
import * as S from "./styles";

const ExclusiveContentPage = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const paymentLinkId = "c53f2470-24df-11ed-b440-a13711ba69cd";

  useEffect(() => {
    payabl.setPaymentLinkId(paymentLinkId);
    payabl.validatePayment(isPaymentValid => {
      setIsValidated(isPaymentValid);
      setIsLoaded(true);
    });
    payabl.onAccountsChanged(isPaymentValid => {
      setIsValidated(isPaymentValid);
    });

    window.addEventListener("message", event => {
      const paymentStatus = event.data.paymentStatus;
      if (paymentStatus === "success") {
        setIsLoaded(false);
        payabl.validatePayment(isPaymentValid => {
          setIsValidated(isPaymentValid);
          setIsLoaded(true);
        });
      }
    });
  }, []);

  return isLoaded ? (
    isValidated ? (
      <S.Container>
        <Heading size="h1" fontWeight="heavy">
          You have access to this secret message!
        </Heading>

        <Heading size="h2" fontWeight="bold">
          Here it is.
        </Heading>

        <Heading size="h4" fontWeight="light">
          That was it.
        </Heading>
      </S.Container>
    ) : (
      <S.Container>
        <Heading size="h2" fontWeight="bold">
          You do not have access to the secret message.
        </Heading>

        <div style={{ margin: "0.5rem 0 0.5rem 0" }} />
        <PaymentButton payment_link_id={paymentLinkId} />
      </S.Container>
    )
  ) : (
    <S.Container>
      <Heading size="h1" fontWeight="bold">
        Loading...
      </Heading>
    </S.Container>
  );
};

export default ExclusiveContentPage;
