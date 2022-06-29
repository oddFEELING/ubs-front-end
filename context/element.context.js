/** 🌹oddFEELING */

import create from 'zustand';

export const elementsStore = create((set) => ({
  footerId: null,
  setFooterId: (payload) => set(() => ({ footerId: payload })),
}));
