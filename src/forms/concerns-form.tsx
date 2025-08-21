"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ConcernsFormType } from '@/types/form.type'
import { ROOF_CONCERNS_OPTIONS } from '@/constants/select-options'
import CardCheckboxInput from '@/components/form-inputs/card-checkbox-input'
import FormGroup from '@/components/form-group'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function ConcernsForm() {
    const form = useFormContext<ConcernsFormType>()
    return (
        <FormGroup>
            <SurveyHeader />
            <CardCheckboxInput
                name="concerns"
                control={form.control}
                options={ROOF_CONCERNS_OPTIONS}
                radioButtonOptions={{
                    autoFocus: true
                }}
            />
            <EnterButton />
        </FormGroup>
    )
}

export default ConcernsForm


