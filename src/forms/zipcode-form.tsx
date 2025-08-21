"use client"

import OkayButton from '@/components/enter-button'
import FormGroup from '@/components/form-group'
import { TextInput } from '@/components/form-inputs/text-input'
import { ZipcodeFormType } from '@/types/form.type'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import SurveyHeader from '@/components/survey-header'

function ZipcodeForm() {
    const form = useFormContext<ZipcodeFormType>()
    return (
        <FormGroup className='flex flex-col gap-4 items-start w-full'>
            <SurveyHeader />
            <TextInput 
                control={form.control}
                name="zipCode"
                placeholder="Enter your zip code"
                type="number"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
                labelClassName="text-sm font-medium"
                
            />
            <OkayButton />
        </FormGroup>
    )
}

export default ZipcodeForm