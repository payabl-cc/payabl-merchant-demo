import React, { useEffect, useState } from "react";
import { PaymentButton } from "payabl-ui-library";
import Heading from "../../components/Styleguide/Heading";
import BodyText from "../../components/Styleguide/BodyText";
import { payabl } from "../_app";
import * as S from "./styles";
import { Row, Column } from "../../app/globals";
import { ReactSVG } from "react-svg";

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
    payabl.onPaymentStatusUpdated(paymentStatus => {
      if (paymentStatus === "success") {
        setIsLoaded(false);
        payabl.validatePayment(isPaymentValid => {
          setIsValidated(isPaymentValid);
          setIsLoaded(true);
        });
      } else if (paymentStatus === "failed") {
        setIsLoaded(false);
        window.alert("Payment has failed, please try again");
      }
    });
  }, []);

  return isLoaded ? (
    isValidated ? (
      <S.ExclusiveContainer>
        <S.Header>
          <Heading size="h2" fontWeight="heavy" color="#212329">
            You have access to the exclusive page!
          </Heading>
        </S.Header>

        <Row>
          <Column>
            <S.Skeleton height="16px" width="50%" />
            <S.Skeleton height="32px" width="100%" />

            <S.Skeleton height="16px" width="50%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />

            <S.Skeleton height="16px" width="50%" />
            <S.Skeleton height="32px" width="100%" />

            <S.Skeleton height="24px" width="50%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />

            <S.Skeleton height="16px" width="50%" />
            <S.Skeleton height="32px" width="100%" />

            <S.Skeleton height="24px" width="50%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />

            <S.Skeleton height="16px" width="50%" />
            <S.Skeleton height="32px" width="100%" />
            <S.Skeleton height="32px" width="100%" />
          </Column>

          <Column margin="0 0 0 1rem">
            <Heading size="h3" color="#212329">
              This is a simple demonstration of what can be achieved with
              Payabl.cc
            </Heading>

            <BodyText fontStyle="light" color="#212329" margin="1rem 0 0 0">
              Interested in learning more? Check out our Guides &amp; API{" "}
              <S.ColoredLink>
                <a
                  href="https://payablcc.readme.io/reference/getting-started-with-your-api"
                  target="_blank"
                >
                  here!
                </a>
              </S.ColoredLink>
            </BodyText>

            <S.ExternalLinks>
              <li>
                <Row>
                  <BodyText color="#212329" margin="0 0.25rem 0 0">
                    <a href="https://www.payabl.cc" target="_blank">
                      {" "}
                      Payabl.cc website{" "}
                    </a>
                  </BodyText>
                  <ReactSVG src="/assets/payabl-transparent-dark.svg" />
                </Row>
              </li>
              <li>
                <Row>
                  <BodyText color="#212329" margin="0 0.25rem 0 0">
                    <a href="https://www.github.com/payabl-cc" target="_blank">
                      Github
                    </a>
                  </BodyText>
                  <ReactSVG src="/assets/github.svg" />
                </Row>
              </li>
              <li>
                <Row>
                  <BodyText color="#212329" margin="0 0.25rem 0 0">
                    <a href="https://www.twitter.com/payabl_cc" target="_blank">
                      {" "}
                      Twitter
                    </a>
                  </BodyText>
                  <ReactSVG src="/assets/twitter.svg" />
                </Row>
              </li>
            </S.ExternalLinks>
          </Column>
        </Row>
      </S.ExclusiveContainer>
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
