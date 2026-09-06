import { useState } from "react";

interface UseValidationResult {
  errors: string[] | null;
  setErrors: (errors: string[] | null) => void;
  addError: (error: string) => void;
  clearErrors: () => void;
  hasErrors: boolean;
}

/**
 * Custom hook for managing form validation errors
 * Provides methods to add, clear, and manage validation messages
 */
export const useValidation = (): UseValidationResult => {
  const [errors, setErrors] = useState<string[] | null>(null);

  const addError = (error: string) => {
    setErrors(prev => prev ? [...prev, error] : [error]);
  };

  const clearErrors = () => {
    setErrors(null);
  };

  const hasErrors = errors !== null && errors.length > 0;

  return {
    errors,
    setErrors,
    addError,
    clearErrors,
    hasErrors,
  };
};

/**
 * Reusable field validation function
 */
export const validateField = (
  value: string,
  fieldName: string,
  options: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    customValidator?: (value: string) => string | null;
  } = {}
): string | null => {
  const { required, minLength, maxLength, pattern, customValidator } = options;

  if (required && !value.trim()) {
    return `${fieldName} is required.`;
  }

  if (minLength && value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters.`;
  }

  if (maxLength && value.length > maxLength) {
    return `${fieldName} must not exceed ${maxLength} characters.`;
  }

  if (pattern && !pattern.test(value)) {
    return `${fieldName} format is invalid.`;
  }

  if (customValidator) {
    const error = customValidator(value);
    if (error) return error;
  }

  return null;
};

/**
 * Reusable numeric field validation
 */
export const validateNumericField = (
  value: string,
  fieldName: string,
  options: {
    required?: boolean;
    min?: number;
    max?: number;
  } = {}
): string | null => {
  const { required, min, max } = options;

  if (required && !value.trim()) {
    return `${fieldName} is required.`;
  }

  if (value && !/^\d+(\.\d{1,2})?$/.test(value)) {
    return `${fieldName} must be a valid number.`;
  }

  const numValue = parseFloat(value);

  if (min !== undefined && numValue < min) {
    return `${fieldName} must be at least ${min}.`;
  }

  if (max !== undefined && numValue > max) {
    return `${fieldName} must not exceed ${max}.`;
  }

  return null;
};
