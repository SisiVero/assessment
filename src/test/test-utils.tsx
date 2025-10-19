import {type ReactElement } from 'react'
import {type RenderOptions } from '@testing-library/react'
import{render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

const mockStore = configureStore({
  reducer: {
    api: () => ({})
  }
})

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={mockStore}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }