"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { LastNameFormType } from '@/types/form.type'
import FormGroup from '@/components/form-group'
import { TextInput } from '@/components/form-inputs/text-input'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function LastNameForm() {
    const form = useFormContext<LastNameFormType>()
    return (
        <FormGroup className='w-full'>
            <SurveyHeader />
            <TextInput
                control={form.control}
                name="lastName"
                placeholder="Enter your last name"
                type="text"
                inputWrapperClassName="w-full"
                inputGroupClassName="w-full"
            />
            <EnterButton />
        </FormGroup>
    )
}

export default LastNameForm


