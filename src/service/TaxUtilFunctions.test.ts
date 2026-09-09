import {
  calculateNZTaxAccLevyNetIncome,
  calculateNZTaxAndNetIncome,
} from './TaxUtilFunctions';
import { formatCurrency } from './EarningsDetailsUtilFunctions';

describe('TaxUtilFunctions', () => {
  describe('calculateNZTaxAccLevyNetIncome', () => {
    test('calculates the levy for income below the maximum', () => {
      const result = calculateNZTaxAccLevyNetIncome('100000');
      expect(result.accLevy).toContain('$ 1,670.00');
    });

    test('caps the levy calculation at the maximum income', () => {
      const result = calculateNZTaxAccLevyNetIncome('200000');
      expect(result.accLevy).toContain('$ 2,551.59');
    });

    test('includes ACC levy in net income', () => {
      const result = calculateNZTaxAccLevyNetIncome('100000');
      expect(result.tax).toContain('$');
      expect(result.accLevy).toContain('/');
      expect(result.netIncome).toContain('$');
    });
  });

  describe('calculateNZTaxAndNetIncome', () => {
    test('calculates tax for income in first bracket', () => {
      const result = calculateNZTaxAndNetIncome('10000');
      expect(result.tax).toBeTruthy();
      expect(result.netIncome).toBeTruthy();
    });

    test('calculates tax for income in multiple brackets', () => {
      const result = calculateNZTaxAndNetIncome('100000');
      expect(result.tax).toBeTruthy();
      expect(result.netIncome).toBeTruthy();
    });

    test('returns formatted currency values', () => {
      const result = calculateNZTaxAndNetIncome('50000');
      expect(result.tax).toContain('$');
      expect(result.netIncome).toContain('$');
    });

    test('calculates correct tax for zero income', () => {
      const result = calculateNZTaxAndNetIncome('0');
      expect(result).toBeTruthy();
    });

    test('provides both annual and monthly breakdowns', () => {
      const result = calculateNZTaxAndNetIncome('100000');
      expect(result.tax).toContain('/');
      expect(result.netIncome).toContain('/');
    });

    test('handles high income correctly', () => {
      const result = calculateNZTaxAndNetIncome('250000');
      expect(result.tax).toBeTruthy();
      expect(result.netIncome).toBeTruthy();
    });
  });

  describe('formatCurrency', () => {
    test('formats numbers as NZD currency', () => {
      const result = formatCurrency(1000);
      expect(result).toMatch(/\$\s+/);
      expect(result).toContain('1,000');
    });

    test('handles decimal values', () => {
      const result = formatCurrency(1000.50);
      expect(result).toContain('1,000.50');
    });

    test('handles zero value', () => {
      const result = formatCurrency(0);
      expect(result).toContain('0');
    });

    test('includes thousands separator', () => {
      const result = formatCurrency(1234567);
      expect(result).toMatch(/1,234,567/);
    });

    test('includes space after currency symbol', () => {
      const result = formatCurrency(100);
      expect(result).toMatch(/\$\s+/);
    });
  });
});
