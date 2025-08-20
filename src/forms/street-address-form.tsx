"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { StreetAddressFormType } from '@/types/form.type'
import FormGroup from '@/components/form-group'
import { TextInput } from '@/components/form-inputs/text-input'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function StreetAddressForm() {
    const form = useFormContext<StreetAddressFormType>()
    return (
        <FormGroup className='w-full'>
            <SurveyHeader />
            <TextInput
                control={form.control}
                name="streetAddress"
                placeholder="Enter your street address"
                type="text"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
            />
            <EnterButton />
        </FormGroup>
    )
}

export default StreetAddressForm


