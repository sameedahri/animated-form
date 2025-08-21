import React from 'react'
import { Button } from './ui/button'
import { useSurveyFormStepper } from '@/context/survey-form-provider'

function EnterButton() {
    const { useStepper } = useSurveyFormStepper()
    const { next, isLast } = useStepper()

    const buttonText = isLast ? 'Submit' : 'Ok'

    return (
        <Button
            type='submit'
            className=''
        >
            {buttonText} <span className='pt-1'>&#8629;</span>
        </Button>
    )
}

export default EnterButton