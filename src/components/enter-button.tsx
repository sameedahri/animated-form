import React from 'react'
import { Button } from './ui/button'
import { useSurveyFormStepper } from '@/context/survey-form-provider'
import { useFormContext } from 'react-hook-form'
import { CornerDownLeft } from 'lucide-react'

function EnterButton() {
    const { useStepper } = useSurveyFormStepper()
    const { next, isLast } = useStepper()
    const { formState: { isSubmitting } } = useFormContext()

    const buttonText = isLast ? 'Submit' : 'Ok'

    return (
        <Button
            type='submit'
            className='w-full md:text-lg md:h-11 md:w-auto'
            isLoading={isSubmitting}
        >
            <div className="flex items-center gap-1">
                {buttonText} <CornerDownLeft className='size-3' />
            </div>
        </Button>
    )
}

export default EnterButton