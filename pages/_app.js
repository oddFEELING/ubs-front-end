/** 🌹oddFEELING */

import 'aos/dist/aos.css';
import 'swiper/css/bundle';
import '../styles/globals.css';
import AppLayout from '../layout/AppLayout';
import { ThemeProvider } from 'styled-components';
import ThemeObj from '../assets/theme/theme.object';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ThemeObj}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
