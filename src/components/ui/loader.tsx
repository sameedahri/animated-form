import { cn } from '@/lib/utils'
import { Loader as LoaderIcon } from 'lucide-react'
import React from 'react'

function Loader({ className }: { className?: string }) {
    return (
        <LoaderIcon className={cn('size-4 animate-spin-slow text-primary', className)} />
    )
}

export default Loader