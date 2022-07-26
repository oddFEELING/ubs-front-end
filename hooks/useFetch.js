/** 🌹oddFEELING */

import axios from 'axios';
import { useQuery } from 'react-query';
import React, { useState } from 'react';

const useFetch = (target, payload) => {
  let Query;

  switch (target) {
    // ======= photo categories -->
    case 'photo-categories':
      return (Query = useQuery(
        'photo-categories',
        async () =>
          await axios.get(
            'https://ubs-cms-strapi.herokuapp.com/api/photo-categories',
            {
              headers: {
                authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
              },
            }
          )
      ));

    // ======= photos -->
    case 'images':
      return (Query = useQuery(
        'images',
        async () =>
          await axios.get(
            'https://ubs-cms-strapi.herokuapp.com/api/photos?populate=*',
            {
              headers: {
                authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
              },
            }
          )
      ));

    // ======= post a message -->
    case 'get-messages':
      return (Query = useQuery(
        'get-messages',
        async () =>
          await axios.get('https://ubs-server.herokuapp.com/messages/', {
            headers: {
              authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          })
      ));

    default:
      break;
  }

  return Query;
};

export default useFetch;
