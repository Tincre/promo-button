import '../../../dist/bundle.css'; // @tincre/promo-button/bundle.css

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
