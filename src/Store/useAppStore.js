import { create } from "zustand"

export const useAppStore = create((set) => ({
  user: {
    name: "",
    email: ""
  },

  setUser: (user) => set({ user })
}))