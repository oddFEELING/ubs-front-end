/** 🌹oddFEELING */

import create from 'zustand';

export const navStore = create((set) => ({
  current_route: `/`,
  setCurrent_route: (payload) =>
    set(() => ({
      current_route: payload,
    })),
}));

// image.attributes.photo_categories.data.map((category) => {
//   category.attributes.Title === selected ||
//     (selected === 'all' && (
//       <ImageListItem
//         key={index}
//         rows={image.attributes.Rows}
//         cols={image.attributes.Columns}
//         data-aos='fade-up'
//       >
//         <Image
//           alt={image.img}
//           layout='fill'
//           loading='lazy'
//           src={image.attributes.Photo.data.attributes.url}
//           objectFit='cover'
//           placeholder={image.img}
//         />

//         <ImageListItemBar
//           sx={{
//             background:
//               'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//               'rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)',
//           }}
//           title={`${image.attributes.Title} by @${image.attributes.Author.data.attributes.username}`}
//           position='top'
//         />
//       </ImageListItem>
//     ));
// })(
