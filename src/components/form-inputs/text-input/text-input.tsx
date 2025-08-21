"use client"

import React from 'react'
import { FormField } from '@/ui/form'
import {
    FieldPath,
    FieldValues
} from 'react-hook-form'
import PasswordInput from './password-input';
import FormGroup from '../form-group';
import { Input, InputProps } from '@/ui/input';
import { BaseFormFieldProps } from '@/types/form-input.type';
import { FormGroupProps } from '@/types/form-group.type';



export interface TextInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends BaseFormFieldProps<TFieldValues, TName>, Omit<InputProps, keyof BaseFormFieldProps<TFieldValues, TName>>, FormGroupProps {
}

/**
 * Text input component,
 * 
 */
export function TextInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    control,
    name,
    type,
    label,
    labelClassName,
    errorMessageClassName,
    inputGroupClassName,
    ...inputProps
}: TextInputProps<TFieldValues, TName>) {

    return (
        <FormField
            control={control}
            name={name}
            render={({field, fieldState}) => {
                const isInvalid = !!fieldState.error
                const fieldValue = field.value || ""
                return (
                    <FormGroup
                        label={label}
                        labelClassName={labelClassName}
                        errorMessageClassName={errorMessageClassName}
                        inputGroupClassName={inputGroupClassName}
                    >
                        {type === "password" ? (
                            <PasswordInput
                                {...field}
                                value={fieldValue}
                                {...inputProps}
                                aria-invalid={isInvalid}
                                autoFocus={(inputProps.autoFocus && !field.value) ? true : false}
                            />
                        ) : (
                            <Input
                                type={type}
                                aria-invalid={isInvalid}
                                {...field}
                                value={fieldValue}
                                {...inputProps}
                                autoFocus={(inputProps.autoFocus && !field.value) ? true : false}
                            />
                        )}
                    </FormGroup>
                )
            }}
        />
    )
}

