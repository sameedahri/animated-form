import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Icon } from "@/types/icon.type"

export const className = `border-b placeholder:text-placeholder border-input outline-none w-full bg-transparent scroll-mb-5 transition-all focus-visible:border-primary focus-visible:border-b-2 aria-invalid:border-destructive disabled:bg-muted disabled:text-muted-foreground`

const iconClassName = "outline-none focus-visible:ring-2 ring-primary/50 focus-visible:ring-offset-2 rounded absolute text-muted-foreground/70 size-5 ring-offset-background"

const inputVariants = cva(
  className,
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "border-destructive text-destructive placeholder:text-placeholder focus-visible:ring-destructive/50 focus-visible:border-destructive",
      },
      size: {
        default: "h-11 px-1 py-1 text-lg placeholder:text-base md:text-lg xl:text-xl xl:placeholder:text-lg",
        sm: "h-9 px-2.5 text-sm rounded-md",
        lg: "h-10 px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type InputVariantProps = VariantProps<typeof inputVariants>

export type InputProps = Omit<React.ComponentProps<"input">, keyof InputVariantProps> & InputVariantProps & {
  RightIcon?: Icon,
  LeftIcon?: Icon,
  leftIconProps?: React.SVGProps<SVGSVGElement>,
  rightIconProps?: React.SVGProps<SVGSVGElement>,
  /**
   * The class name for the input wrapper
   */
  inputWrapperClassName?: string,
}

function Input({
  className,
  type,
  variant,
  size,
  inputWrapperClassName,
  RightIcon,
  LeftIcon,
  leftIconProps,
  rightIconProps,
  ...props
}: InputProps) {
  return (
    <div className={cn("relative flex items-center w-full", inputWrapperClassName)}>
      {LeftIcon && (
        <LeftIcon
          {...leftIconProps}
          className={cn(
            iconClassName,
            "left-3",
            {
              "text-muted-foreground/20": props.disabled,
            },
            leftIconProps?.className
          )}
        />
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({
            variant,
            size,
          }),
          {
            "pl-10": LeftIcon,
            "pr-10": RightIcon,
          },
          className,
        )}
        {...props}
      />
      {RightIcon && (
        <RightIcon
          {...rightIconProps}
          className={cn(
            iconClassName,
            "right-3",
            {
              "text-muted-foreground/20": props.disabled,
            },
            rightIconProps?.className,
          )}
        />
      )}
    </div>
  )
}


export { Input, inputVariants }
