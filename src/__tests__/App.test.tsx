import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import App from '../App'

vi.mock('@/redux/api/baseApi', () => ({
  useGetUserQuery: () => ({
    data: { first_name: 'John', last_name: 'Doe', email: 'john@example.com' },
    isLoading: false
  }),
  useGetWalletQuery: () => ({
    data: { balance: 120500 },
    isLoading: false
  }),
  useGetTransactionsQuery: () => ({
    data: [],
    isLoading: false
  })
}))

const mockStore = configureStore({
  reducer: {
    api: () => ({})
  }
})

const renderApp = () => {
  return render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}

describe('App', () => {
  it('renders navigation menu', () => {
    renderApp()
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('CRM')).toBeInTheDocument()
    expect(screen.getByText('Apps')).toBeInTheDocument()
  })

  it('renders user profile section', () => {
    renderApp()
    
    expect(screen.getByText('JD')).toBeInTheDocument()
  })
})