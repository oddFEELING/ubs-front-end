/** 🌹oddFEELING */

import axios from 'axios';
import { useQuery } from 'react-query';
import React, { useState } from 'react';

const useFetch = (target) => {
  let Query;

  switch (target) {
    // ======= photo categories -->
    case 'photo-categories':
      return (Query = useQuery('photo-categories', () =>
        axios.get('https://ubs-cms-strapi.herokuapp.com/api/photo-categories', {
          headers: {
            authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        })
      ));

    // ======= photos -->
    case 'images':
      return (Query = useQuery('images', () =>
        axios.get(
          'https://ubs-cms-strapi.herokuapp.com/api/photos?populate=*',
          {
            headers: {
              authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        )
      ));

    default:
      break;
  }

  return Query;
};

export default useFetch;
