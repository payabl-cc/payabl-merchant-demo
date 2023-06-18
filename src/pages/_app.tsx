import "../app/globals.css";
import PayablSDK from "payabl-sdk";
import * as S from "../app/globals"

export const payabl = new PayablSDK(process.env.NEXT_PUBLIC_API_KEY);

export default function App({ Component, pageProps }) {
  return (
    <S.Container>
      <Component {...pageProps} />
    </S.Container>
  );
}
