import React from 'react'
import { cn } from '@/lib/utils'
import {
    FormMessage,
    FormLabel,
    FormControl,
    FormItem
} from '@/ui/form'
import { FormGroupPropsWithChildren } from '@/types/form-group.type'


/**
 * FormGroup Component
 * 
 * A flexible wrapper component for form inputs that provides:
 * - Optional label display
 * - Left and right icon positioning
 * - Error message display
 * - Consistent styling and layout
 * 
 * This component follows the compound component pattern by wrapping form controls
 * with additional UI elements like labels, icons, and error messages.
 * 
 * @param props - The component props
 * @returns A form group with label, icons, input, and error message
 * 
 * @example
 * ```tsx
 * <FormGroup
 *   label="Email Address"
 *   leftIcon={<MailIcon />}
 *   rightIcon={<CheckIcon />}
 * >
 *   <Input type="email" placeholder="Enter your email" />
 * </FormGroup>
 * ```
 */
function FormGroup({
    label,
    inputGroupClassName,
    labelClassName,
    children,
    errorMessageClassName,
}: FormGroupPropsWithChildren) {
    return (
        <FormItem className={cn(
            "w-full gap-1",
            inputGroupClassName,
        )}>
            {/* Conditionally render label if provided */}
            {
                label &&
                <FormLabel
                    className={cn(
                        "form-label",
                        labelClassName,
                    )}
                >
                    {label}
                </FormLabel>
            }
            
            <FormControl>
                {children}
            </FormControl>
            
            {/* Error message display - automatically shows validation errors */}
            <FormMessage 
                className={cn(
                    "rounded-md text-destructive text-sm block",
                    errorMessageClassName,
                )} 
            />
        </FormItem>
    )
}

export default FormGroup