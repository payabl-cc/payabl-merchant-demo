import "../app/globals.css";
import PayablSDK from "payabl-sdk";

export const payabl = new PayablSDK(
  process.env.NEXT_PUBLIC_API_KEY
);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
