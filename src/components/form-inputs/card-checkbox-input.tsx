"use client"

import React, { ComponentProps } from 'react'
import { FormControl, FormField, FormItem } from '@/ui/form'
import { Control, FieldPath, FieldValues } from 'react-hook-form'
import { cn } from '@/lib/utils'
import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import { Label } from '@/ui/label'
import { SelectOptions } from '@/types/select-option.type'
import { Check } from 'lucide-react'
import { useSurveyFormStepper } from '@/context/survey-form-provider'

/**
 * Props for the FormRadioInput component
 * 
 * @template TFieldValues - The type of the form values object
 * @template TName - The type of the field name (must be a valid path in TFieldValues)
 */
type CardCheckboxInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    /** The field name in the form (must be a valid path in TFieldValues) */
    name: TName,
    /** React Hook Form control object */
    control: Control<TFieldValues>,

    options: SelectOptions,

    radioButtonOptions?: ComponentProps<typeof RadixRadioGroup.Root>,
}

function CardCheckboxInput<
    TFieldValues extends FieldValues = FieldValues, 
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ control, name, options, radioButtonOptions }: CardCheckboxInputProps<TFieldValues, TName>) {
    const { useStepper } = useSurveyFormStepper()
    const { current, next } = useStepper()
    return (
        <FormField 
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <RadixRadioGroup.Root
                            value={field.value}
                            onValueChange={(value) => {
                                field.onChange(value)
                                next()
                            }}
                            className="w-full flex flex-col gap-4"
                            {...radioButtonOptions}
                        >
                            {options.map((option) => (
                                <RadixRadioGroup.Item
                                    key={`${name}-${option.value}`}
                                    value={option.value}
                                    className={cn(
                                        "relative group border border-primary/20 min-w-[200px] rounded-md py-2 px-2 text-start grid grid-cols-[auto_1fr_auto] items-center gap-2 cursor-pointer hover:bg-primary/12 focus-visible:ring-3 focus-visible:ring-ring/50 transition-all duration-200 bg-primary/5",
                                        "data-[state=checked]:bg-primary/10 data-[state=checked]:border-primary",
                                    )}
                                >
                                    <span className='size-4 aspect-square transition-colors duration-200 border border-primary/30 rounded-full group-data-[state=checked]:bg-primary'></span>
                                    <Label className="text-base leading-relaxed cursor-pointer text-foreground/70 group-data-[state=checked]:text-primary text-center w-full">{option.label}</Label>
                                    <Check 
                                        className={cn(
                                            'size-4 ml-3 text-transparent transition-colors duration-200',
                                            'group-data-[state=checked]:text-primary',
                                        )} 
                                    />
                                    {/* <RadixRadioGroup.RadioGroupIndicator>
                                    </RadixRadioGroup.RadioGroupIndicator> */}
                                </RadixRadioGroup.Item>
                            ))}
                        </RadixRadioGroup.Root>
                    </FormControl>
                </FormItem>
            )}
        />
    )
}

export default CardCheckboxInput