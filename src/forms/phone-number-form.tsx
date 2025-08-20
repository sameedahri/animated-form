"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { PhoneNumberFormType } from '@/types/form.type'
import FormGroup from '@/components/form-group'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'
import { PhoneInput } from '@/components/form-inputs/phone-input'

function PhoneNumberForm() {
    const form = useFormContext<PhoneNumberFormType>()
    return (
        <FormGroup className='w-full'>
            <SurveyHeader />
            <PhoneInput
                control={form.control}
                name="phoneNumber"
                placeholder="Enter your phone number"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
            />
            <EnterButton />
        </FormGroup>
    )
}

export default PhoneNumberForm


