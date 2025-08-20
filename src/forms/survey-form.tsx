"use client"

import { useSurveyFormStepper } from '@/context/survey-form-provider'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import SurveyHeader from '@/components/survey-header'
import { useNavigationDirection } from '@/context/survey-form-provider'
import SurveyNavigation from '@/components/survey-navigation'
import { AnimatePresence } from 'motion/react'

function SurveyForm() {

    const stepper = useSurveyFormStepper()
    const { useStepper } = stepper
    const { current, next, isLast } = useStepper()
   
    const form = useForm({
        resolver: zodResolver(current.schema),
    })

    const onSubmit = async (data: z.infer<typeof current.schema>) => {
        if (!isLast) {
            next()
            return
        }
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='border relative w-full  max-w-5xl h-[600px] flex justify-center items-center rounded-md'
            >
                <div className="max-w-xl w-full mx-auto">
                    <AnimatePresence>
                        <current.Form />
                    </AnimatePresence>
                </div>
                <div className="absolute right-5 bottom-5"> 
                    <SurveyNavigation />
                </div>
            </form>
        </FormProvider>
    )
}

export default SurveyForm