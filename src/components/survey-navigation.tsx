
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { useNavigationDirection, useSurveyFormStepper } from '@/context/survey-form-provider'

function SurveyNavigation() {
    const { useStepper } = useSurveyFormStepper()
    const { setDirection } = useNavigationDirection()
    const { next, prev, isLast, isFirst } = useStepper()
    const { trigger } = useFormContext()

    const handleNext = async () => {
        const isValid = await trigger()
        if(isValid) {
            setDirection('next')
            next()
        }
    }

    const handlePrev = () => {
        setDirection('prev')
        prev()
    }
    
    return (
        <div className='flex gap-1'>
            <Button
                size={"icon"}
                onClick={handlePrev}
                type='button'
                disabled={isFirst}
            >
                <ChevronUp className='size-4' />
            </Button>
            <Button
                size={"icon"}
                onClick={handleNext}
                type='button'
                disabled={isLast}
            >
                <ChevronDown className='size-4' />
            </Button>
        </div>
    )
}

export default SurveyNavigation