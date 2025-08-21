"use client"

import { useSurveyFormStepper } from '@/context/survey-form-provider'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
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
        console.log(form.getValues())
    }

    return (
        <FormProvider {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='border relative p-4 w-11/12 max-w-5xl h-[600px] flex justify-center items-center rounded-md'
                noValidate
            >
                <div className="max-w-xl w-full mx-auto">
                    <AnimatePresence initial={false}>
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