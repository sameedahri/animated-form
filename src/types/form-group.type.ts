import { PropsWithChildren } from "react";

/**
 * Props interface for the FormGroup component
 */
export interface FormGroupProps {
    /** Optional label text to display above the input */
    label?: string;
    /** Optional CSS classes to apply to the wrapper container */
    inputGroupClassName?: string;
    /** Optional CSS classes to apply to the label element */
    labelClassName?: string;
    /** Optional classes to apply to the error message */
    errorMessageClassName?: string;
}

/**
 * Utility type that excludes the children prop from FormGroupProps
 * Useful for cases where you need FormGroup props but will provide children separately
 */
export type FormGroupPropsWithChildren = PropsWithChildren<FormGroupProps>