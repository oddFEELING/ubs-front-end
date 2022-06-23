/** 🌹oddFEELING */

import 'aos/dist/aos.css';
import 'swiper/css/bundle';
import '../styles/globals.css';
import AppLayout from '../layout/AppLayout';
import { ThemeProvider } from 'styled-components';
import ThemeObj from '../assets/theme/theme.object';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  // useQuery(['gallery-photos', 'gallery-categories', 'blog-posts']);

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={ThemeObj}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
