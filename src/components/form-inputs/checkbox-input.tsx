"use client"

import { Control, FieldPath, FieldValues } from "react-hook-form"

import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/ui/form"
import { SelectOptions } from "@/types/select-option.type"
import FormGroup from "./form-group"
import { cn } from "@/lib/utils"
import { FormGroupProps } from "@/types/form-group.type"


interface CheckboxInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends FormGroupProps {
    /**
     * Name of the field to store the checkbox input value
     */
    name: TName,

    /**
     * Control object to manage the form state
     */
    control: Control<TFieldValues>,

    /**
     * List of options to display in the checkbox input
     */
    options: SelectOptions,

    /**
     * Wrapper class name for the options list container
     */
    optionsContainerClassName?: string,

    /**
     * Option label class name
     */
    optionLabelClassName?: string,

    /**
     * Wrapper class name for the checkbox container
     */
    checkboxContainerClassName?: string,
}

export function CheckboxInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    name,
    control,
    options,
    optionsContainerClassName,
    optionLabelClassName,
    checkboxContainerClassName,
    ...formGroupProps
}: CheckboxInputProps<TFieldValues, TName>) {
    return (
        <FormField
            control={control}
            name={name}
            render={() => (
                <FormGroup {...formGroupProps}>
                    <div className={cn("flex flex-col gap-5 w-full", optionsContainerClassName)}>
                        {options.map((item) => (
                            <FormField
                                key={item.value}
                                control={control}
                                name={name}
                                render={({ field }) => {
                                    return (
                                        <FormItem
                                            key={item.value}
                                            className={cn("flex flex-row items-center space-y-0 gap-0", checkboxContainerClassName)}
                                        >
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value?.includes(item.value)}
                                                    onCheckedChange={(checked) => {
                                                        const currentValue = field.value || []
                                                        // const currentValue = field.value
                                                        return checked
                                                            ? field.onChange([...currentValue, item.value])
                                                            : field.onChange(
                                                                currentValue?.filter(
                                                                    (value: string) => value !== item.value
                                                                )
                                                            )
                                                    }}
                                                />
                                            </FormControl>
                                            <FormLabel className={cn("font-normal text-foreground text-sm pl-2 cursor-pointer", optionLabelClassName)}>
                                                {item.label}
                                            </FormLabel>
                                        </FormItem>
                                    )
                                }}
                            />
                        ))}
                    </div>
                </FormGroup>
            )}
        />
    )
}
