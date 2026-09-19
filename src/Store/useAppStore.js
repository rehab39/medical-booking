import { create } from "zustand"

const useAppStore = create((set) => ({
  user: {
    name: "",
    email: "",
  },

  setUser: (user) => set({ user }),

  favorites: JSON.parse(localStorage.getItem("favorites")) || [],

  toggleFavorite: (doctorId) =>
    set((state) => {
      let favorites = [...state.favorites]

      if (favorites.includes(doctorId)) {
        favorites = favorites.filter((id) => id !== doctorId)
      } else {
        favorites.push(doctorId)
      }

      localStorage.setItem("favorites", JSON.stringify(favorites))

      return { favorites }
    }),

    darkMode: false,

toggleDarkMode: () =>
  set((state) => ({
    darkMode: !state.darkMode,
  })),
}))

export default useAppStore