/** 🌹oddFEELING */

import AlphaSetter from '../../helpers/alpha_setter.helper';

const ThemeObj = {
  colors: {
    clr_1: '#E72727',
    clr_2: '#992DCC',
    clr_3: '#27E746',
    clr_4: '#29176B',
    clr_5: '#4E349B',
    lt_1: '#ffffff',
    lt_2: '#f3f4ff',
    dk_1: '#1A1A1A',
    dk_2: '#393939',
  },
  fonts: {
    pri: `'Montserrat', sans-serif`,
    sec: `'Lora', serif`,
    size: {
      xs: `.5rem`,
      sm: `.8rem`,
      md: `1.1rem`,
      lg: `1.6rem`,
      xl: `2.3rem`,
      xxl: `5rem`,
    },
  },
  alpha: AlphaSetter,
  transition: {
    smooth: '300ms all ease-in-out',
    mid: '500ms all ease-in-out',
    slow: '800ms all ease-in-out',
    extended: '1200ms all ease-in-out',
  },
  shadow: {
    sd_1: `0 2px 4px rgba(0,0,0,0.05)`,
    sd_2: `0 3px 9px rgba(0,0,0,0.1)`,
    sd_3: `.5px 4px 16px rgba(0,0,0,0.15)`,
    sd_4: `1 7px 22px rgba(0,0,0,0.2)`,
    sd_5: `2 8px 35px rgba(0,0,0,0.25)`,
  },
};

export default ThemeObj;
