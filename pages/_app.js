/** 🌹oddFEELING */

import 'aos/dist/aos.css';
import 'swiper/css/bundle';
import '../styles/globals.css';
import Script from 'next/script';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'styled-components';
import ThemeObj from '../assets/theme/theme.object';
import { ReactQueryDevtools } from 'react-query/devtools';
import Seo from '../helpers/next-seo.config';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    // Google tag (gtag.js)
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3JFLYDHTJ');
  }, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={ThemeObj}>
        {/* ====== google analytics script */}
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-D3JFLYDHTJ'
        ></Script>
        <DefaultSeo {...Seo} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
