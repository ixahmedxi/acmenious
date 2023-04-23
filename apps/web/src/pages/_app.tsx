import '../styles/globals.css';
import type { AppProps } from 'next/app.js';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
