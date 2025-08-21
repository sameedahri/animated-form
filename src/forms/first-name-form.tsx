"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FirstNameFormType } from '@/types/form.type'
import FormGroup from '@/components/form-group'
import { TextInput } from '@/components/form-inputs/text-input'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function FirstNameForm() {
    const form = useFormContext<FirstNameFormType>()
    return (
        <FormGroup className='w-full'>
            <SurveyHeader />
            <TextInput
                control={form.control}
                name="firstName"
                placeholder="Enter your first name"
                type="text"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
                autoFocus
            />
            <EnterButton />
        </FormGroup>
    )
}

export default FirstNameForm


