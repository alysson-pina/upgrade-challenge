import { fetchColors } from '@/api/colors'
import { UserData } from '@/types'
import { create } from 'zustand'

export type State = {
  userData: UserData,
  colors: string[];
  isLoadingColors: boolean;
}

export type Actions = {
  updateUserData: (data: Partial<State['userData']>) => void;
  fetchColors: () => Promise<void>;
  reset: () => void;
}

const getStartState = () => ({
  userData: {
    name: '',
    email: '',
    password: '',
    color: '',
    terms: false,
  },
  colors: [],
  isLoadingColors: false,
})

export const useAppStore = create<State & Actions>((set, get) => ({
  ...getStartState(),
  colors: [],
  fetchColors: async () => {
    const fetchedColors = get().colors
    const isLoadingColors = get().isLoadingColors

    if (fetchedColors.length > 0 || isLoadingColors) {
      return
    }

    set({ isLoadingColors: true })

    const colors = await fetchColors()

    set({ colors, isLoadingColors: false })
  },
  updateUserData: (newState) => set((state) => ({ ...state, userData: { ...state.userData, ...newState } })),
  reset: () => set(() => getStartState()),
}))
