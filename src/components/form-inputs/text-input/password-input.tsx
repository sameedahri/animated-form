"use client"

import { Button } from '@/ui/button'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { Input, InputProps } from '@/ui/input';

type PasswordTextInputProps = Omit<InputProps, "type" | "RightIcon" | "rightIconProps">

/**
 * Password text input component
 * 
 * @param props - Component props
 * @param props.inputProps - Input props
 * @param props.formGroupProps - Form group props
 * 
 * @returns JSX.Element - The password text input component
 */
function PasswordInput(props: PasswordTextInputProps) {

    const [showPassword, setShowPassword] = useState(false)

    // Dynamic type for the input based on the show password state
    const dynamicType = showPassword ? "text" : "password"

    return (
        <Input
            RightIcon={showPassword ? EyeOff : Eye}
            rightIconProps={{
                onClick: () => setShowPassword(!showPassword),
                className: "cursor-pointer hover:text-muted-foreground",
                tabIndex: 0,
            }}
            type={dynamicType}
            {...props}
        />
    )
}

export default PasswordInput