"use client"

import { useSurveyFormStepper } from '@/context/survey-form-provider'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import SurveyNavigation from '@/components/survey-navigation'
import { AnimatePresence } from 'motion/react'
import { postContact } from '@/actions/ghl'
import { errorToast, successToast } from '@/lib/toast'

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
        const res = await postContact(form.getValues())
        if(!res.success) {
            errorToast("Failed to submit your information")
            return
        }
        successToast("Successfully submitted your information!")
    }

    return (
        <FormProvider {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
                className='relative w-11/12 max-w-5xl h-[500px] flex justify-center items-center'
                noValidate
            >
                <div className="max-w-xl w-full mx-auto">
                    <AnimatePresence initial={false}>
                        <current.Form />
                    </AnimatePresence>
                </div>
                <div className="absolute right-0 bottom-2"> 
                    <SurveyNavigation />
                </div>
            </form>
        </FormProvider>
    )
}

export default SurveyForm