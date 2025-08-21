import CardCheckboxInput from '@/components/form-inputs/card-checkbox-input'
import { OwnershipFormType } from '@/types/form.type'
import { useFormContext } from 'react-hook-form'
import React from 'react'
import { YES_NO_OPTIONS } from '@/constants/select-options'
import SurveyHeader from '@/components/survey-header'
import FormGroup from '@/components/form-group'
import EnterButton from '@/components/enter-button'

function OwnershipForm() {
    const form = useFormContext<OwnershipFormType>()
    return (
        <FormGroup>
            <SurveyHeader />
            <CardCheckboxInput
                name='ownership'
                control={form.control}
                options={YES_NO_OPTIONS}
                radioButtonOptions={{
                    autoFocus: true
                }}
            />
            <EnterButton />
        </FormGroup>
    )
}

export default OwnershipForm