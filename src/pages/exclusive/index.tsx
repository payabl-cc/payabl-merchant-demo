import React, { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styles";
import PaymentButton from "../../components/PaymentButton/PaymentButton";
import Heading from "../../components/Styleguide/Heading";

const ExclusiveContentPage = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const payment_link_id = "c53f2470-24df-11ed-b440-a13711ba69cd";

  const getIsValidated = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    const address = accounts[0];

    const config = {
      headers: {
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
      }
    };

    try {
      const response = await axios.get(
        `http://localhost:3003/payment_links/${payment_link_id}/validate_payment?address=${address}`,
        config
      );

      if (response.data.payment_valid) {
        setIsValidated(true);
      }

      setIsLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIsValidated();
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
          {/* <S.Link
                  href={`http://localhost:3000/pay?id=${payment_link_id}`}
                >
                  Proceed to payment
                </S.Link> */}
        </Heading>

        <div style={{ margin: "0.5rem 0 0.5rem 0" }} />
        <PaymentButton payment_link_id={payment_link_id} />
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
