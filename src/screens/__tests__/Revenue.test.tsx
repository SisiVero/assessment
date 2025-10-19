import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import Revenue from '../Revenue'

// Mock recharts
vi.mock('recharts', () => ({
  LineChart: ({ children }: any) => <div data-testid="line-chart">{children}</div>,
  Line: () => <div data-testid="line" />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: () => <div data-testid="tooltip" />,
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>
}))

// Mock components
vi.mock('@/components/Button', () => ({
  default: ({ children, ...props }: any) => <button {...props}>{children}</button>
}))

vi.mock('@/components/DashBoardSumary', () => ({
  default: () => <div data-testid="dashboard-summary">Dashboard Summary</div>
}))

vi.mock('@/components/Transactions', () => ({
  default: () => <div data-testid="transaction-history">Transaction History</div>
}))

vi.mock('@/components/Filter', () => ({
  Filter: () => <div data-testid="filter">Filter</div>
}))

vi.mock('@/assets/svg/Export', () => ({
  default: () => <div data-testid="export-icon">Export</div>
}))

vi.mock('lucide-react', () => ({
  Filter: () => <div data-testid="filter-icon">FilterIcon</div>
}))

const mockWalletData = {
  balance: 120500,
  total_payout: 50000,
  pending_payout: 10000,
  ledger_balance: 80000,
  total_revenue: 200000
}

const mockTransactionData = [
  { id: 1, type: 'Store Transaction', amount: 1000, status: 'Successful' },
  { id: 2, type: 'Withdrawal', amount: 500, status: 'Pending' }
]

vi.mock('@/redux/api/baseApi', () => ({
  useGetWalletQuery: () => ({
    data: mockWalletData,
    isLoading: false
  }),
  useGetTransactionsQuery: () => ({
    data: mockTransactionData,
    isLoading: false
  })
}))

const mockStore = configureStore({
  reducer: {
    api: () => ({})
  }
})

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <Provider store={mockStore}>
      {component}
    </Provider>
  )
}

describe('Revenue', () => {
  it('renders without crashing', () => {
    renderWithProvider(<Revenue />)
    
    expect(screen.getByTestId('line-chart')).toBeInTheDocument()
  })

  it('renders dashboard summary', () => {
    renderWithProvider(<Revenue />)
    
    expect(screen.getByTestId('dashboard-summary')).toBeInTheDocument()
  })

  it('renders transaction history', () => {
    renderWithProvider(<Revenue />)
    
    expect(screen.getByTestId('transaction-history')).toBeInTheDocument()
  })

  it('renders filter component', () => {
    renderWithProvider(<Revenue />)
    
    expect(screen.getByTestId('filter')).toBeInTheDocument()
  })
})