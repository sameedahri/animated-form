import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import Loader from "@/components/ui/loader"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] ring-offset-1 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",

                destructive:
                    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/40 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",

                outline:
                    "border bg-background-light shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",

                secondary:
                    "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",

                ghost:
                    "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",

                link: "text-primary underline-offset-4 hover:underline",

                muted:
                    "bg-muted text-muted-foreground shadow-xs hover:bg-muted/80",

                warning: "bg-warning text-warning-foreground shadow-xs hover:bg-warning/90",   

                none: "",

                "outline-primary": "border border-primary/80 text-primary bg-background-light hover:bg-primary/10 hover:text-primary",

                "outline-muted": "border border-muted-foreground/80 text-muted-foreground bg-background-light hover:bg-muted-foreground/10 hover:text-muted-foreground",

                "outline-destructive": "border border-destructive/80 text-destructive bg-background-light hover:bg-destructive/10 hover:text-destructive",

                "bootstrap-primary": "bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20",

                "bootstrap-destructive": "bg-destructive/10 border border-destructive/20 text-destructive hover:bg-destructive/20",

                "soft-muted": "bg-muted/50 text-muted-foreground hover:bg-muted/80 active:bg-muted/80 active:scale-95",

                "soft-destructive": "bg-destructive/10 text-destructive [@media(hover:hover)]:hover:bg-destructive/20 active:bg-destructive/20 active:scale-95",

                "soft-primary": "bg-primary/10 text-primary hover:bg-primary/20 active:bg-primary/20 active:scale-95",

                "soft-success": "bg-success/10 text-success hover:bg-success/20 active:bg-success/20 active:scale-95",
            },
            size: {
                none: "",
                default: "h-10 px-4 py-2 has-[>svg]:px-3 rounded-md",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-11 rounded-md px-2 has-[>svg]:px-3",
                icon: "size-9 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

type ButtonProps = React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean,
        isLoading?: boolean
    }

function Button({
    className,
    variant,
    size,
    asChild = false,
    isLoading = false,
    ...props
}: ButtonProps) {

    const Comp = asChild ? Slot : "button"

    if(isLoading) {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                {...props}
                disabled={true}
            >
                <Loader className="w-4 h-4 animate-spin text-inherit" />
                <span>{props.children}</span>
            </button>
        )
    }

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {props.children}
        </Comp>
    )
}

export { Button, buttonVariants, type ButtonProps }
