import "@/styles/globals.css"; // CSS global (ajuste o caminho conforme seu projeto)
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
