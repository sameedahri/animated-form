import { useSurveyFormStepper } from '@/context/survey-form-provider'
import React from 'react'

function SurveyHeader() {
    const { useStepper } = useSurveyFormStepper()
    const { current } = useStepper()
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-xl font-medium md:text-2xl'>{current.question}</h1>
            {current.description && <p className='text-sm text-muted-foreground'>{current.description}</p>}
        </div>
    )
}

export default SurveyHeader