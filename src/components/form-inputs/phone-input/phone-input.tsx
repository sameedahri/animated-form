"use client"

import React from 'react'
import { FormField } from '@/ui/form'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { FormGroupProps } from '@/types/form-group.type'
import BasePhoneInput from './base-phone-input'
import { BaseFormFieldProps } from '@/types/form-input.type'
import FormGroup from '../form-group'
import { PhoneInput as PhoneInputUI, PhoneInputProps as PhoneInputUIProps } from '@/components/ui/phone-input'

/**
 * Props interface for the PhoneInput component
 * 
 * @template TFieldValues - The shape of the form values object from react-hook-form
 * @template TName - The specific field path within the form values for type safety
 */
interface PhoneInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
    > extends BaseFormFieldProps<TFieldValues, TName>, FormGroupProps, Omit<PhoneInputUIProps, keyof BaseFormFieldProps<TFieldValues, TName> | keyof FormGroupProps> {
}

/**
 * PhoneInput Component
 * 
 * A reusable phone input component that integrates with React Hook Form.
 * This component wraps the base phone input with form field management,
 * validation, and consistent styling through the FormGroup wrapper.
 * 
 * Features:
 * - Full integration with React Hook Form
 * - Type-safe field names using generics
 * - Consistent styling and layout via FormGroup
 * - Built-in form validation support
 * - Responsive design with full width
 * 
 * @template TFieldValues - The form's data structure type
 * @template TName - The specific field name for type safety
 * 
 * @example
 * ```tsx
 * // Basic usage with form
 * <PhoneInput
 *   name="phoneNumber"
 *   control={control}
 *   placeholder="Enter your phone number"
 *   label="Phone Number"
 * />
 * ```
 */
function PhoneInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    label,
    labelClassName,
    errorMessageClassName,
    inputGroupClassName,
    ...props
}: PhoneInputProps<TFieldValues, TName>) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <FormGroup
                    label={label}
                    labelClassName={labelClassName}
                    errorMessageClassName={errorMessageClassName}
                    inputGroupClassName={inputGroupClassName}
                >
                    <PhoneInputUI
                        defaultCountry='US'
                        aria-invalid={!!fieldState.error}
                        {...field}
                        {...props}
                        className='w-full rounded-sm'
                    />
                </FormGroup>
            )}
        />
    )
}

export default PhoneInput