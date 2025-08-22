import { useSurveyFormStepper } from '@/context/survey-form-provider'
import React from 'react'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'

function SurveyHeader() {
    const { useStepper } = useSurveyFormStepper()
    const { current, isFirst, prev } = useStepper()

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex item-center gap-1 md:gap-1.5'>
                {!isFirst && (
                    <Button 
                        size={"icon"} 
                        variant={"ghost"}
                        type='button'
                        onClick={prev}
                    >
                        <ChevronLeft className='size-6 md:size-7' />
                    </Button>
                )}
                <h1 className='text-2xl font-medium md:text-2xl xl:text-3xl'>{current.question}</h1>
            </div>
            {current.description && <p className='text-sm text-muted-foreground xl:text-base'>{current.description}</p>}
        </div>
    )
}

export default SurveyHeader