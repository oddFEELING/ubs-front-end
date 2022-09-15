/** 🌹oddFEELING */

import create from 'zustand';

export const galleryStore = create((set) => ({
  selected: 'all',
  setSelected: (payload) => set(() => ({ selected: payload })),
}));
