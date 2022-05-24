/** 🌹oddFEELING */

import create from 'zustand';

export const navStore = create((set) => ({
  current_route: `/`,
  setCurrent_route: (payload) =>
    set(() => ({
      current_route: payload,
    })),
}));
