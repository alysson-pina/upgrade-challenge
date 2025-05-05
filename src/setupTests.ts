import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { TextEncoder, TextDecoder } from 'util';
import { mockStoreValues } from './test-utils/mockStore';
import * as appStore from '@/store/store';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder as typeof global.TextDecoder;
}

global.ArrayBuffer = ArrayBuffer;
global.Uint8Array = Uint8Array;

// jest.mock('@/store', () => ({
//   __esModule: true,
//   useAppStore: jest.fn(),
// }));

beforeEach(() => {
  // Initialize default mock
  jest.spyOn(appStore, 'useAppStore').mockImplementation(() => 
    mockStoreValues as ReturnType<typeof appStore.useAppStore>
  )
})

afterAll(() => {
  jest.clearAllMocks();
});
