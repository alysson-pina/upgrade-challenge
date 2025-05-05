import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router';
import * as appStore from '@/store/store';
import { createMockStore } from './mockStore';

interface CustomRenderOptions extends RenderOptions {
  store?: Partial<appStore.State & appStore.Actions>;
  route?: string;
}

const customRender = (ui: ReactElement, options: CustomRenderOptions = {}) => {
  const { store, route = '/', ...renderOptions } = options;
  
  // Clear previous mocks
  jest.restoreAllMocks();
  
  // Mock fresh
  jest.spyOn(appStore, 'useAppStore').mockImplementation(() => 
    createMockStore(store) as ReturnType<typeof appStore.useAppStore>
  );

  return render(ui, {
    wrapper: ({ children }) => <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>,
    ...renderOptions
  });
};

export { customRender as render }
