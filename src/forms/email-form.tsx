"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { EmailFormType } from '@/types/form.type'
import FormGroup from '@/components/form-group'
import { TextInput } from '@/components/form-inputs/text-input'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function EmailForm() {
    const form = useFormContext<EmailFormType>()
    return (
        <FormGroup className='w-full'>
            <SurveyHeader />
            <TextInput
                control={form.control}
                name="email"
                placeholder="Enter your email"
                type="email"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
            />
            <EnterButton />
        </FormGroup>
    )
}

export default EmailForm


