"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { CityFormType } from '@/types/form.type'
import FormGroup from '@/components/form-group'
import { TextInput } from '@/components/form-inputs/text-input'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function CityForm() {
    const form = useFormContext<CityFormType>()
    return (
        <FormGroup className='w-full'>
            <SurveyHeader />
            <TextInput
                control={form.control}
                name="city"
                placeholder="Enter your city"
                type="text"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
            />
            <EnterButton />
        </FormGroup>
    )
}

export default CityForm


