/** 🌹oddFEELING */

import create from 'zustand';

export const elementsStore = create((set) => ({
  footerElement: null,
  setfooterElement: (payload) => set(() => ({ footerElement: payload })),
}));
