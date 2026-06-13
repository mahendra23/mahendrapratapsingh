import { renderHook, act } from '@testing-library/react';
import { useValidation, validateField, validateNumericField } from './useValidation';

describe('useValidation Hook', () => {
  test('initializes with no errors', () => {
    const { result } = renderHook(() => useValidation());
    expect(result.current.errors).toBeNull();
    expect(result.current.hasErrors).toBe(false);
  });

  test('can set errors', () => {
    const { result } = renderHook(() => useValidation());
    
    act(() => {
      result.current.setErrors(['Error 1', 'Error 2']);
    });
    
    expect(result.current.errors).toEqual(['Error 1', 'Error 2']);
    expect(result.current.hasErrors).toBe(true);
  });

  test('can add individual errors', () => {
    const { result } = renderHook(() => useValidation());
    
    act(() => {
      result.current.addError('First error');
      result.current.addError('Second error');
    });
    
    expect(result.current.errors).toEqual(['First error', 'Second error']);
  });

  test('can clear all errors', () => {
    const { result } = renderHook(() => useValidation());
    
    act(() => {
      result.current.setErrors(['Error 1']);
    });
    
    expect(result.current.hasErrors).toBe(true);
    
    act(() => {
      result.current.clearErrors();
    });
    
    expect(result.current.errors).toBeNull();
    expect(result.current.hasErrors).toBe(false);
  });
});

describe('validateField', () => {
  test('validates required field', () => {
    expect(validateField('', 'Name', { required: true })).toBeTruthy();
    expect(validateField('John', 'Name', { required: true })).toBeNull();
  });

  test('validates field length', () => {
    expect(validateField('ab', 'Password', { minLength: 6 })).toBeTruthy();
    expect(validateField('abcdef', 'Password', { minLength: 6 })).toBeNull();
  });

  test('validates field max length', () => {
    expect(validateField('abcdefghij', 'Field', { maxLength: 5 })).toBeTruthy();
    expect(validateField('abc', 'Field', { maxLength: 5 })).toBeNull();
  });

  test('validates field pattern', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(validateField('invalid', 'Email', { pattern: emailPattern })).toBeTruthy();
    expect(validateField('test@example.com', 'Email', { pattern: emailPattern })).toBeNull();
  });

  test('validates with custom validator', () => {
    const customValidator = (value: string) => 
      value.includes('bad') ? 'Contains forbidden word' : null;
    
    expect(validateField('bad value', 'Field', { customValidator })).toBeTruthy();
    expect(validateField('good value', 'Field', { customValidator })).toBeNull();
  });
});

describe('validateNumericField', () => {
  test('validates required numeric field', () => {
    expect(validateNumericField('', 'Amount', { required: true })).toBeTruthy();
    expect(validateNumericField('100', 'Amount', { required: true })).toBeNull();
  });

  test('validates numeric format', () => {
    expect(validateNumericField('abc', 'Amount')).toBeTruthy();
    expect(validateNumericField('100.50', 'Amount')).toBeNull();
  });

  test('validates minimum value', () => {
    expect(validateNumericField('5', 'Amount', { min: 10 })).toBeTruthy();
    expect(validateNumericField('15', 'Amount', { min: 10 })).toBeNull();
  });

  test('validates maximum value', () => {
    expect(validateNumericField('150', 'Amount', { max: 100 })).toBeTruthy();
    expect(validateNumericField('50', 'Amount', { max: 100 })).toBeNull();
  });

  test('validates decimal numbers correctly', () => {
    expect(validateNumericField('99.99', 'Price')).toBeNull();
    expect(validateNumericField('99.999', 'Price')).toBeTruthy();
  });
});
