import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppsDetails from '../AppsDetails'

vi.mock('@/utils', () => ({
  appItems: [
    {
      title: 'Link in Bio',
      subtext: 'Manage your links',
      icon: vi.fn(() => <div data-testid="link-icon">LinkIcon</div>)
    },
    {
      title: 'Store',
      subtext: 'Your online store',
      icon: vi.fn(() => <div data-testid="store-icon">StoreIcon</div>)
    }
  ]
}))

describe('AppsDetails', () => {
  const mockOnOpenChange = vi.fn()
  const mockTrigger = <button>Open Apps</button>

  beforeEach(() => {
    mockOnOpenChange.mockClear()
  })

  it('renders app items when open', () => {
    render(
      <AppsDetails 
        open={true} 
        onOpenChange={mockOnOpenChange} 
        trigger={mockTrigger} 
      />
    )

    expect(screen.getByText('Link in Bio')).toBeInTheDocument()
    expect(screen.getByText('Store')).toBeInTheDocument()
  })

  it('renders icons for each app item', () => {
    render(
      <AppsDetails 
        open={true} 
        onOpenChange={mockOnOpenChange} 
        trigger={mockTrigger} 
      />
    )

    expect(screen.getByTestId('link-icon')).toBeInTheDocument()
    expect(screen.getByTestId('store-icon')).toBeInTheDocument()
  })

  it('has hover effect classes', () => {
    render(
      <AppsDetails 
        open={true} 
        onOpenChange={mockOnOpenChange} 
        trigger={mockTrigger} 
      />
    )

    const items = document.querySelectorAll('.group')
    expect(items.length).toBe(2)
  })
})