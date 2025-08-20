import React from 'react'
import { ControllerFieldState, ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form'
import FormGroup from '../form-group'
import { PhoneInput } from '@/components/ui/phone-input'
import { useFormField } from '@/ui/form'
import { FormGroupProps } from '@/types/form-group.type'

type BasePhoneInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = FormGroupProps & {
    field: ControllerRenderProps<TFieldValues, TName>,
    fieldState: ControllerFieldState,
    placeholder?: string,
}

function BasePhoneInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    field,
    fieldState,
    placeholder,
    ...props
}: BasePhoneInputProps<TFieldValues, TName>) {
    const { error } = useFormField()
    return (
        <FormGroup {...props}>
            <PhoneInput
                {...field}
                placeholder={placeholder}
                className='w-full rounded-sm'
                aria-invalid={!!error}
                defaultCountry='AE'
            />
        </FormGroup>
    )
}

export default BasePhoneInput