// ======= Helper to set alpha on a color  -->

const AlphaSetter = (color, level) => {
  switch (color) {
    // ======= major colors -->
    case `clr_1`:
      return `rgba(231,39,39, ${level})`;
    case 'clr_2':
      return `rgba(153,45,204,${level})`;
    case 'clr_3':
      return `rgba(39,231,70,${level})`;
    case 'clr_4':
      return `rgba(41,23,107,${level})`;
    case 'clr_5':
      return `rgba(78,52,155,${level})`;

    // ======= light colors -->
    case 'lt_1':
      return `rgba(255,255,255,${level})`;
    case 'lt_2':
      return `rgba(234,244,255,${level})`;

    // ======= dark colors -->
    case 'dk_1':
      return `rgba(26,26,26,${level})`;
    case 'dk_2':
      return `rgba(57,57,57,${level})`;

    // ======= return white default -->
    default:
      return `rgba(255,255,255,${level})`;
  }
};

export default AlphaSetter;
