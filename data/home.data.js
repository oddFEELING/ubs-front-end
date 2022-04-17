/** 🌹oddFEELING */

// ======= #hero Slide data  -->
export const SlideData = [
  {
    title: `Unique Blossom Schools`,
    desc: `Leadership and Knowledge`,
    img: '/hero/hero-img-1.JPG',
    buttons: [
      {
        text: `Enquiries`,
        color: `#f3f4ff`,
        hv_color: ``,
        bg: `#E72727`,
        hv_bg: ``,
      },
      {
        text: `Admissions`,
        color: `#1A1A1A`,
        hv_color: ``,
        bg: `#f3f4ff`,
        hv_bg: ``,
      },
    ],
  },
  {
    title: `Lucrative Hands-on Skills`,
    desc: `Discover your childs Talent and build on it!`,
    img: '/hero/hero-img-2.JPG',
    buttons: [
      {
        text: `enquiries`,
        color: `#f3f4ff`,
        hv_color: ``,
        bg: `#E72727`,
        hv_bg: ``,
      },
      {
        text: `Gallery`,
        color: `#1A1A1A`,
        hv_color: ``,
        bg: `#f3f4ff`,
        hv_bg: ``,
      },
    ],
  },
  {
    title: `Educative Trips and Events`,
    desc: `Cultural days, exclusive excursions, sports events and many more `,
    img: '/hero/hero-img-3.JPG',
    buttons: [
      {
        text: `enquiries`,
        color: `#f3f4ff`,
        hv_color: ``,
        bg: `#E72727`,
        hv_bg: ``,
      },
      {
        text: `view more`,
        color: `#1A1A1A`,
        hv_color: ``,
        bg: `#f3f4ff`,
        hv_bg: ``,
      },
    ],
  },
];

/** TopSectionData
 * @param {string} card icon
 * @param {string} title  header text
 * @param {string} content  content text
 * @param {number} delay  AOS delay value
 * @param {Function} bg   takes theme object as param and returns background color
 */
// ======= #top section cards data -->
export const TopSectionData = [
  {
    icon: `carbon:building-insights-1`,
    title: `School Events`,
    content: `Unique blossom Schools provide kids  with  environment that is calm and  condusive for educative activities which aids easy learning.`,
    delay: 0,
    bg: (theme) => theme.alpha('clr_1', 0.55),
  },
  {
    icon: `simple-icons:microsoftacademic`,
    title: `Academics`,
    content: `Unique blossom Schools provide kids  with  environment that is calm and  condusive for educative activities which aids easy learning.`,
    delay: 200,
    bg: (theme) => theme.alpha('clr_2', 0.55),
  },
  {
    icon: `heroicons-outline:academic-cap`,
    title: `Admissions`,
    content: `Unique blossom Schools provide kids  with  environment that is calm and  condusive for educative activities which aids easy learning.`,
    delay: 400,
    bg: (theme) => theme.alpha('clr_3', 0.55),
  },
];

// ======= #facility -->
export const facilityData = [
  {
    icon: `emojione-monotone:money-bag`,
    title: `Affordable Fees`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    delay: 0,
  },
  {
    icon: `carbon:report`,
    title: `Standard laboratories`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    delay: 100,
  },
  {
    icon: `emojione-monotone:trophy`,
    title: `Excellent track record`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    delay: 200,
  },
];

// ======= #Offer card data -->
export const OfferCardData = [
  {
    image: `/hero/creche-img.JPG`,
    title: `Creche`,
    clr: '#E7272780',
    content: `Basic and eciting knowledge for the kids`,
  },
  {
    image: `/hero/nursery-img.JPG`,
    title: `Nursery`,
    clr: '#992DCC80',
    content: `Basic and eciting knowledge for the kids`,
  },
  {
    image: `/hero/high-school-img.JPG`,
    title: `High School`,
    clr: '#27E74690',
    content: `Basic and eciting knowledge for the kids`,
  },
];
