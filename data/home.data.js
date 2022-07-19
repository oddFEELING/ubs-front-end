/** 🌹oddFEELING */

// ======= #hero Slide data  -->
export const SlideData = [
  {
    title: `Unique Blossom Schools`,
    desc: `Leadership and Knowledge`,
    img: '/hero/hero-img-1.webp',
    buttons: [
      {
        text: `Enquiries`,
        color: `#f3f4ff`,
        hv_color: ``,
        bg: `#E72727`,
        hv_bg: ``,
        onclick: (element) => element.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        text: `Admissions`,
        color: `#1A1A1A`,
        hv_color: ``,
        bg: `#f3f4ff`,
        hv_bg: ``,
        onclick: (element, router) => {
          router.push('login');
        },
      },
    ],
  },
  {
    title: `Lucrative Hands-on Skills`,
    desc: `Discover your childs Talent and build on it!`,
    img: '/hero/hero-img-2.webp',
    buttons: [
      {
        text: `enquiries`,
        color: `#f3f4ff`,
        hv_color: ``,
        bg: `#E72727`,
        hv_bg: ``,
        onclick: (element) => element.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        text: `Gallery`,
        color: `#1A1A1A`,
        hv_color: ``,
        bg: `#f3f4ff`,
        hv_bg: ``,
        onclick: (element, router) => {
          router.push('/gallery');
        },
      },
    ],
  },
  {
    title: `Educative Trips and Events`,
    desc: `Cultural days, exclusive excursions, sports events and many more `,
    img: '/hero/hero-img-3.webp',
    buttons: [
      {
        text: `enquiries`,
        color: `#f3f4ff`,
        hv_color: ``,
        bg: `#E72727`,
        hv_bg: ``,
        onclick: (element) => element.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        text: `view more`,
        color: `#1A1A1A`,
        hv_color: ``,
        bg: `#f3f4ff`,
        hv_bg: ``,
        onclick: (elemnt, router) => {
          router.push('blog');
        },
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
    content: `At UBS, we have created a school that is driven by creativity and innovation. Our students experience a unique balance between academic work and extracurricular activities, ensuring that they are well prepared for life after school.`,
    delay: 0,
    bg: (theme) => theme.alpha('clr_1', 0.55),
  },
  {
    icon: `simple-icons:microsoftacademic`,
    title: `Academics`,
    content: `Unique blossom Schools provide kids  with  environment that is calm and  condusive for educative activities which aids easy learning.That’s why our focus is on what matters most`,
    delay: 200,
    bg: (theme) => theme.alpha('clr_2', 0.55),
  },
  {
    icon: `heroicons-outline:academic-cap`,
    title: `Admissions`,
    content: `Unique blossom Schools deliver world-class educational services with easy to complete admission processes.`,
    delay: 400,
    bg: (theme) => theme.alpha('clr_3', 0.55),
  },
];

// ======= #facility -->
export const facilityData = [
  {
    icon: `emojione-monotone:money-bag`,
    title: `Affordable Fees`,
    content: ` If you’re looking for an economical school that offers modern facilities and affordable tuition fees, then you’ve come to the right place.`,
    delay: 0,
  },
  {
    icon: `carbon:report`,
    title: `Standard laboratories`,
    content: ` The school has well equipped labs and provides the students with modern technology. It was built with the goal of making learning fun for all its students by providing a home like atmosphere and helping them enjoy their education.`,
    delay: 100,
  },
  {
    icon: `emojione-monotone:trophy`,
    title: `Excellent track record`,
    content: `Proven to be an excellent school with the best scores in programs and an excellent track record in all areas.`,
    delay: 200,
  },
];

// ======= #Offer card data -->
export const OfferCardData = [
  {
    image: `/home/creche-img.webp`,
    title: `Creche/Nursery`,
    clr: '#E7272780',
    content: `Basic and eciting knowledge for the kids`,
  },
  {
    image: `/home/nursery-img.webp`,
    title: `Primary`,
    clr: '#992DCC80',
    content: `Basic and eciting knowledge for the kids`,
  },
  {
    image: `/home/high-school-img.webp`,
    title: `High School`,
    clr: '#27E74690',
    content: `Basic and eciting knowledge for the kids`,
  },
];
