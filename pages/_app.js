/** 🌹oddFEELING */

import 'aos/dist/aos.css';
import 'swiper/css/bundle';
import '../styles/globals.css';
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

  useEffect(() => {}, []);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={ThemeObj}>
        <DefaultSeo {...Seo} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
