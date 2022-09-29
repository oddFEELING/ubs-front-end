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

    //=============================================>  ## MESSAGES
    // ======= post a message -->
    case 'get-messages':
      return (Query = useQuery(
        'get-messages',
        async () =>
          await axios.get('https://ubs-server.herokuapp.com/messages/', {
            headers: {
              authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }),
        {
          refetchInterval: 5000,
          staleTime: 5000,
        }
      ));

    // ======= mark a message as read -->
    case 'mark-message-read':
      return (Query = useQuery(
        'set-message-read',
        async () =>
          await axios.patch(
            `https://ubs-server.herokuapp.com/messages/${payload && payload}`,
            { status: 'read' },
            {
              headers: {
                authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
              },
            }
          ),
        {
          enabled: false,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
        }
      ));

    // ======= mark all message as read -->
    case 'mark-single-message-read':
      return (Query = useQuery(
        'set-message-read',
        async () =>
          await axios.patch(
            `https://ubs-server.herokuapp.com/messages`,
            { status: 'read' },
            {
              headers: {
                authorization: `BEARER ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
              },
            }
          ),
        {
          enabled: false,
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
        }
      ));

    default:
      break;
  }

  return Query;
};

export default useFetch;
