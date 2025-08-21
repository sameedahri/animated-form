import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useNavigationDirection, useSurveyFormStepper } from '@/context/survey-form-provider'

function FormGroup({ children, className }: PropsWithChildren<{ className?: string }>) {
    const { useStepper } = useSurveyFormStepper()
    const { current,  } = useStepper()
    const { direction } = useNavigationDirection()
    const dir: 1 | -1 = direction === 'next' ? 1 : -1

    const variants = {
        enter: (d: 1 | -1) => ({ 
            opacity: 0, y: d > 0 ? -250 : 250 
        }),
        center: { 
            opacity: 1, y: 0 
        },
        exit: (d: 1 | -1) => ({ 
            opacity: 0, y: d > 0 ? 250 : -250 
        }),
    }
    return (
        <AnimatePresence>   
            <motion.div 
                key={current.id}
                className={cn('flex flex-col gap-5 items-start', className)}
                variants={variants}
                custom={dir}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "linear" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default FormGroup