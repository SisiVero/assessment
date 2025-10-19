import { describe, it, expect } from 'vitest'
import { topNavMenu, appItems, profileItems, transactionStatus } from '../index'

describe('Utils', () => {
  describe('topNavMenu', () => {
    it('has correct structure', () => {
      expect(topNavMenu).toHaveLength(5)
      expect(topNavMenu[0]).toHaveProperty('menu', 'Home')
      expect(topNavMenu[0]).toHaveProperty('link', '/home')
      expect(topNavMenu[0]).toHaveProperty('icon')
    })

    it('contains all required menu items', () => {
      const menuNames = topNavMenu.map(item => item.menu)
      expect(menuNames).toContain('Home')
      expect(menuNames).toContain('Analytics')
      expect(menuNames).toContain('Revenue')
      expect(menuNames).toContain('CRM')
      expect(menuNames).toContain('Apps')
    })
  })

  describe('appItems', () => {
    it('has required properties', () => {
      appItems.forEach(item => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('subtext')
        expect(item).toHaveProperty('icon')
      })
    })
  })

  describe('profileItems', () => {
    it('has required properties', () => {
      profileItems.forEach(item => {
        expect(item).toHaveProperty('label')
        expect(item).toHaveProperty('icon')
      })
    })
  })

  describe('transactionStatus', () => {
    it('contains expected statuses', () => {
      const labels = transactionStatus.map(status => status.label)
      expect(labels).toContain('Successfull')
      expect(labels).toContain('Pending')
      expect(labels).toContain('Failed')
    })
  })
})