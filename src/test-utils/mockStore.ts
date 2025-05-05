import { State, Actions } from '@/store/store';

export const mockStoreValues: Partial<State & Actions> = ({
  colors: [],
  isLoadingColors: false,
  userData: {
    name: '',
    email: '',
    password: '',
    color: '',
    terms: false,
  },
  fetchColors: jest.fn().mockResolvedValue(['black', 'white']),
  updateUserData: jest.fn(),
  reset: jest.fn(),
})

export const createMockStore = (overrides: Partial<State & Actions> = {}) => ({
  ...mockStoreValues,
  ...overrides
});
