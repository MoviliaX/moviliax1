/**
 * @file src/types/form.ts
 * @description Tipos TypeScript para formularios y validación de MoviliaX
 */

import { ReactNode } from 'react';
import { Email, URL, Nullable } from './common';

/**
 * FormValues - Valores genéricos de formulario
 */
export type FormValues = Record<string, any>;

/**
 * FormErrors - Errores de formulario
 */
export type FormErrors<T extends FormValues = FormValues> = {
  [K in keyof T]?: string | string[];
};

/**
 * FormTouched - Campos tocados
 */
export type FormTouched<T extends FormValues = FormValues> = {
  [K in keyof T]?: boolean;
};

/**
 * FormField - Definición de campo de formulario
 */
export interface FormField<T = any> {
  name: string;
  label?: string;
  type: FormFieldType;
  placeholder?: string;
  defaultValue?: T;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  validation?: ValidationRule[];
  options?: FormFieldOption[];
  helperText?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
  dependsOn?: string[];
  condition?: (values: FormValues) => boolean;
}

/**
 * FormFieldType - Tipos de campo de formulario
 */
export type FormFieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'textarea'
  | 'select'
  | 'multiselect'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'range'
  | 'color'
  | 'hidden';

/**
 * FormFieldOption - Opción de campo select/radio/checkbox
 */
export interface FormFieldOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  description?: string;
  icon?: ReactNode;
}

/**
 * ValidationRule - Regla de validación
 */
export interface ValidationRule {
  type: ValidationType;
  value?: any;
  message: string;
  validator?: (value: any, values: FormValues) => boolean | Promise<boolean>;
}

/**
 * ValidationType - Tipos de validación
 */
export type ValidationType =
  | 'required'
  | 'email'
  | 'url'
  | 'min'
  | 'max'
  | 'minLength'
  | 'maxLength'
  | 'pattern'
  | 'custom'
  | 'match'
  | 'unique';

/**
 * FormConfig - Configuración de formulario
 */
export interface FormConfig<T extends FormValues = FormValues> {
  fields: FormField[];
  initialValues?: Partial<T>;
  validationMode?: 'onChange' | 'onBlur' | 'onSubmit';
  reValidateMode?: 'onChange' | 'onBlur' | 'onSubmit';
  onSubmit: (values: T) => void | Promise<void>;
  onError?: (errors: FormErrors<T>) => void;
  resetOnSubmit?: boolean;
  disabled?: boolean;
}

/**
 * FormState - Estado del formulario
 */
export interface FormState<T extends FormValues = FormValues> {
  values: T;
  errors: FormErrors<T>;
  touched: FormTouched<T>;
  isSubmitting: boolean;
  isValidating: boolean;
  isValid: boolean;
  isDirty: boolean;
  submitCount: number;
}

/**
 * ContactFormData - Datos de formulario de contacto
 */
export interface ContactFormData {
  name: string;
  email: Email;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
  website?: URL;
  captcha?: string;
}

/**
 * NewsletterFormData - Datos de formulario de newsletter
 */
export interface NewsletterFormData {
  email: Email;
  name?: string;
  preferences?: {
    frequency?: 'daily' | 'weekly' | 'monthly';
    categories?: string[];
    topics?: string[];
  };
  consent: boolean;
}

/**
 * SearchFormData - Datos de formulario de búsqueda
 */
export interface SearchFormData {
  query: string;
  filters?: {
    categories?: string[];
    tags?: string[];
    dateFrom?: string;
    dateTo?: string;
  };
  sortBy?: 'relevance' | 'date' | 'views';
}

/**
 * CommentFormData - Datos de formulario de comentario
 */
export interface CommentFormData {
  author: {
    name: string;
    email: Email;
    website?: URL;
  };
  content: string;
  parentId?: string;
  postId: string;
  notify?: boolean;
}

/**
 * LoginFormData - Datos de formulario de login
 */
export interface LoginFormData {
  email: Email;
  password: string;
  rememberMe?: boolean;
}

/**
 * RegisterFormData - Datos de formulario de registro
 */
export interface RegisterFormData {
  name: string;
  email: Email;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  newsletter?: boolean;
}

/**
 * ResetPasswordFormData - Datos de formulario de reset password
 */
export interface ResetPasswordFormData {
  email: Email;
}

/**
 * ChangePasswordFormData - Datos de formulario de cambio de contraseña
 */
export interface ChangePasswordFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

/**
 * ProfileFormData - Datos de formulario de perfil
 */
export interface ProfileFormData {
  name: string;
  email: Email;
  bio?: string;
  avatar?: File | URL;
  website?: URL;
  location?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

/**
 * FileUploadData - Datos de carga de archivo
 */
export interface FileUploadData {
  file: File;
  name?: string;
  description?: string;
  tags?: string[];
  public?: boolean;
}

/**
 * FormStep - Paso de formulario multi-step
 */
export interface FormStep {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  validation?: (values: FormValues) => FormErrors | Promise<FormErrors>;
  optional?: boolean;
  onNext?: (values: FormValues) => void | Promise<void>;
  onPrevious?: (values: FormValues) => void;
}

/**
 * MultiStepFormConfig - Configuración de formulario multi-step
 */
export interface MultiStepFormConfig<T extends FormValues = FormValues> {
  steps: FormStep[];
  initialValues?: Partial<T>;
  onComplete: (values: T) => void | Promise<void>;
  onStepChange?: (step: number, values: T) => void;
  allowSkip?: boolean;
  persistData?: boolean;
  storageKey?: string;
}

/**
 * FormAction - Acción de formulario
 */
export interface FormAction {
  type: FormActionType;
  payload?: any;
}

/**
 * FormActionType - Tipos de acción de formulario
 */
export type FormActionType =
  | 'SET_VALUE'
  | 'SET_VALUES'
  | 'SET_ERROR'
  | 'SET_ERRORS'
  | 'SET_TOUCHED'
  | 'SET_SUBMITTING'
  | 'SET_VALIDATING'
  | 'RESET'
  | 'SUBMIT';

/**
 * FieldValidator - Validador de campo
 */
export type FieldValidator<T = any> = (value: T, values: FormValues) => string | undefined | Promise<string | undefined>;

/**
 * FormValidator - Validador de formulario completo
 */
export type FormValidator<T extends FormValues = FormValues> = (values: T) => FormErrors<T> | Promise<FormErrors<T>>;

/**
 * FormTransformer - Transformador de valores
 */
export type FormTransformer<T = any, R = any> = (value: T) => R;

/**
 * SubmitHandler - Manejador de submit
 */
export type SubmitHandler<T extends FormValues = FormValues> = (values: T, helpers: FormHelpers<T>) => void | Promise<void>;

/**
 * FormHelpers - Helpers de formulario
 */
export interface FormHelpers<T extends FormValues = FormValues> {
  setFieldValue: (field: keyof T, value: any) => void;
  setFieldError: (field: keyof T, error: string) => void;
  setFieldTouched: (field: keyof T, touched: boolean) => void;
  setValues: (values: Partial<T>) => void;
  setErrors: (errors: FormErrors<T>) => void;
  setTouched: (touched: FormTouched<T>) => void;
  setSubmitting: (submitting: boolean) => void;
  resetForm: () => void;
  validateField: (field: keyof T) => Promise<string | undefined>;
  validateForm: () => Promise<FormErrors<T>>;
}

/**
 * FormHook - Hook de formulario
 */
export interface FormHook<T extends FormValues = FormValues> extends FormState<T>, FormHelpers<T> {
  handleChange: (field: keyof T) => (value: any) => void;
  handleBlur: (field: keyof T) => () => void;
  handleSubmit: (e?: React.FormEvent) => void;
  getFieldProps: (field: keyof T) => FieldProps;
  isFieldValid: (field: keyof T) => boolean;
  isFieldTouched: (field: keyof T) => boolean;
  getFieldError: (field: keyof T) => string | undefined;
}

/**
 * FieldProps - Props generadas para campo
 */
export interface FieldProps {
  name: string;
  value: any;
  onChange: (value: any) => void;
  onBlur: () => void;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  required?: boolean;
}

/**
 * ValidationResult - Resultado de validación
 */
export interface ValidationResult {
  valid: boolean;
  errors: FormErrors;
}

/**
 * AutocompleteOption - Opción de autocompletado
 */
export interface AutocompleteOption {
  label: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
}

/**
 * FormSection - Sección de formulario
 */
export interface FormSection {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}
