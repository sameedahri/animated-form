"use client"

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { RoofAgeFormType } from '@/types/form.type'
import { ROOF_AGE_OPTIONS } from '@/constants/select-options'
import CardCheckboxInput from '@/components/form-inputs/card-checkbox-input'
import FormGroup from '@/components/form-group'
import SurveyHeader from '@/components/survey-header'
import EnterButton from '@/components/enter-button'

function RoofAgeForm() {
    const form = useFormContext<RoofAgeFormType>()
    return (
        <FormGroup>
            <SurveyHeader />
            <CardCheckboxInput
                name="roofAge"
                control={form.control}
                options={ROOF_AGE_OPTIONS}
            />
            <EnterButton />
        </FormGroup>
    )
}

export default RoofAgeForm


