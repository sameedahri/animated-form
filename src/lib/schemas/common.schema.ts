import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';
import { INPUT_ERROR_MESSAGES } from '@/constants/messages/client';


export const textSchemaMaxLength = {
    base: 100,
    md: 255,
    lg: 2000,
} as const


/**
 * Schema for general text validation with standard limits.
 * 
 * Provides consistent text validation with:
 * - Automatic trimming of whitespace
 * - Minimum 1 character required
 * - Maximum 2000 characters
 * - Clear error messages
 * 
 * @example
 * textSchema().parse("Hello") // ✅ Valid
 * textSchema().parse("") // ❌ Invalid - too short
 * textSchema().parse("a".repeat(2001)) // ❌ Invalid - too long
 * 
 * @returns Zod schema configured for general text validation
 */

// export const textSchema() = z
//     .string({
//         error: err =>
//             !err.input ?
//                 INPUT_ERROR_MESSAGES.required :
//                 INPUT_ERROR_MESSAGES.invalidOption
//     })
//     .trim()
//     .min(1, INPUT_ERROR_MESSAGES.required)
//     .max(2000, INPUT_ERROR_MESSAGES.maxCharacters2000)


/**
 * Factory function that creates text validation schemas with customizable maximum length.
 * 
 * @param maxLength - The maximum length of the text input.
 * @example
 * const textSchema() = makeTextSchema("md");
 * textSchema().parse("Hello") // ✅ Valid
 * textSchema().parse("a".repeat(256)) // ❌ Invalid - too long
 * 
 * @returns Zod schema that validates text input with customizable maximum length
 */
export const textSchema = (maxLength: keyof typeof textSchemaMaxLength = "base") =>  z
    .string({
        error: err =>
            !err.input ?
                INPUT_ERROR_MESSAGES.required :
                INPUT_ERROR_MESSAGES.invalidOption
    })
    .trim()
    .min(1, INPUT_ERROR_MESSAGES.required)
    .max(textSchemaMaxLength[maxLength], INPUT_ERROR_MESSAGES.maxCharacters2000)


/**
 * Schema for text validation with customizable maximum length.
 * 
 * Provides a flexible text validation schema that can be customized
 * to enforce different maximum lengths:
 * - "base" (default): 100 characters
 * - "md": 255 characters
 * - "lg": 2000 characters
 * 
 * @example
 * textSchema().parse("Hello") // ✅ Valid
 * textSchema().parse("a".repeat(2001)) // ❌ Invalid - too long
 * 
 * @returns Zod schema that validates text input with customizable maximum length
 */
// export const textSchema() = Object.assign(
//     ((maxLength: keyof typeof textSchema()MaxLength = "base") =>
//         maketextSchema()(maxLength)) as {
//             (maxLength?: keyof typeof textSchema()MaxLength): z.ZodString;
//         },
//     maketextSchema()("base")
// ) as ((maxLength?: keyof typeof textSchema()MaxLength) => z.ZodString) &
//     z.ZodString;




/**
 * Schema for password validation with comprehensive security requirements.
 * 
 * This schema enforces strong password policies by requiring:
 * - Minimum 8 characters
 * - At least one letter (uppercase or lowercase)
 * - At least one digit
 * - At least one special character (non-alphanumeric)
 * 
 * @example
 * passwordSchema.parse("SecurePass123!") // ✅ Valid
 * passwordSchema.parse("weak") // ❌ Invalid - too short, missing requirements
 * passwordSchema.parse("password123") // ❌ Invalid - missing special character
 * 
 * @returns Zod schema that validates and transforms password input
 */
export const passwordSchema = z.string()
    .min(8, "Min 8 chars, include letters, numbers & symbols.")
    .regex(/[a-zA-Z]/, "Min 8 chars, include letters, numbers & symbols.")
    .regex(/\d/, "Min 8 chars, include letters, numbers & symbols.")
    .regex(/[^a-zA-Z0-9]/, "Min 8 chars, include letters, numbers & symbols.")


/**
 * Schema for email validation using Zod's built-in email validator.
 * 
 * Validates that the input follows standard email format requirements:
 * - Contains @ symbol
 * - Has valid domain structure
 * - Follows RFC 5322 email standards
 * 
 * @example
 * emailSchema.parse("user@example.com") // ✅ Valid
 * emailSchema.parse("invalid-email") // ❌ Invalid
 * emailSchema.parse("user@") // ❌ Invalid
 * 
 * @returns Zod schema that validates email format
 */
export const emailSchema = z.email({
    error: err => {
        if (err.input === "") {
            return INPUT_ERROR_MESSAGES.required
        }
        return INPUT_ERROR_MESSAGES.invalidEmail
    }
});


/**
 * Schema for phone number validation using react-phone-number-input.
 * 
 * Validates that the input is a valid phone number using the isValidPhoneNumber function.
 * 
 * @example
 * phoneSchema.parse("+1234567890") // ✅ Valid
 * phoneSchema.parse("1234567890") // ❌ Invalid - missing country code
 * @returns Zod schema that validates phone number format
 */
export const phoneSchema = textSchema()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })


/**
 * Schema for date validation.
 * 
 * Ensures the input is a valid JavaScript Date object.
 * Useful for form inputs that need to be converted to Date objects.
 * 
 * @example
 * dateSchema.parse(new Date()) // ✅ Valid
 * dateSchema.parse("2023-12-25") // ❌ Invalid - string instead of Date
 * 
 * @returns Zod schema that validates Date objects
 */
export const dateSchema = z.date({
    error: err => {
        if (!err.input) {
            return INPUT_ERROR_MESSAGES.required
        }
        return INPUT_ERROR_MESSAGES.invalidDate
    }
})





/**
 * Factory function that creates multi-select validation schemas.
 * 
 * Validates arrays of selected values against a predefined set of options.
 * Useful for form inputs that allow multiple selections (checkboxes, multi-select dropdowns).
 * 
 * @template V - The type of the option values (must extend string)
 * @param options - Array of option objects with label and value properties
 * @returns Zod schema that validates arrays of selected option values
 * 
 * @example
 * const fruitOptions = [
 *   { label: "Apple", value: "apple" },
 *   { label: "Banana", value: "banana" },
 *   { label: "Orange", value: "orange" }
 * ] as const;
 * 
 * const fruitMultiSelectSchema = multiSelectSchema(fruitOptions);
 * fruitMultiSelectSchema.parse(["apple", "banana"]) // ✅ Valid
 * fruitMultiSelectSchema.parse(["apple", "grape"]) // ❌ Invalid - grape not in options
 */
export const multiSelectSchema = <V extends string>(
    options: readonly { label: string, value: V }[]
) => {
    const schema = z.array(
        z.enum(options.map(option => option.value) as [
            V,
            ...V[]
        ]),
        {
            error: err => {
                if (err.code === "invalid_type") {
                    return INPUT_ERROR_MESSAGES.required
                }
                return INPUT_ERROR_MESSAGES.invalidOption
            },
        }
    )
    return schema
}


/**
 * Factory function that creates single-select validation schemas.
 * 
 * Validates a single selected value against a predefined set of options.
 * Useful for form inputs that allow only one selection (radio buttons, select dropdowns).
 * 
 * @template V - The type of the option values (must extend string)
 * @param options - Array of option objects with label and value properties
 * @returns Zod schema that validates a single selected option value
 * 
 * @example
 * const statusOptions = [
 *   { label: "Active", value: "active" },
 *   { label: "Inactive", value: "inactive" },
 *   { label: "Pending", value: "pending" }
 * ] as const;
 * 
 * const statusSelectSchema = selectSchema(statusOptions);
 * statusSelectSchema.parse("active") // ✅ Valid
 * statusSelectSchema.parse("unknown") // ❌ Invalid - not in options
 */
export const selectSchema = <V extends string>(
    options: readonly { label: string, value: V }[]
) => {
    const schema = z.enum(
        options.map(option => option.value) as [
            V,
            ...V[]
        ],
        {
            error: err => err.input === undefined ? INPUT_ERROR_MESSAGES.required : INPUT_ERROR_MESSAGES.invalidOption,
        }
    )
    return schema
}


/**
 * Schema for positive number validation.
 * 
 * Ensures the input is a number greater than or equal to 1.
 * Useful for quantities, IDs, counts, and other numeric values that must be positive.
 * 
 * @example
 * numberSchema.parse(1) // ✅ Valid
 * numberSchema.parse(100) // ✅ Valid
 * numberSchema.parse(0) // ❌ Invalid - must be >= 1
 * numberSchema.parse(-1) // ❌ Invalid - must be >= 1
 * 
 * @returns Zod schema that validates positive numbers
 */
export const numberSchema = z.coerce.number({
    error: err => {
        if (err.code === "invalid_type") {
            return INPUT_ERROR_MESSAGES.required
        }
        return err.message
    }
}).min(1, {
    error: err => {
        if (err.code === "too_small") {
            return INPUT_ERROR_MESSAGES.required
        }
        return err.message
    }
})

    


export const fileSchema = z.file({
    error: err => {
        if (err.code === "invalid_type") {
            return INPUT_ERROR_MESSAGES.required
        }
        return err.message
    }
})


/**
 * Schema for file validation.
 * 
 * @param maxSize - The maximum size of the file in bytes.
 * @returns Zod schema that validates files
 */
export const fileSchemaArray = (maxSize: number) => z.array(
    fileSchema
        .max(maxSize, {
            error: `Maximum file size is ${maxSize / 1024 / 1024}MB`
        }),
    {
        error: (err) => {
            if (err.code === "invalid_type") {
                return INPUT_ERROR_MESSAGES.required
            }
            return err.message
        }
    })
    .min(1, {
        error: INPUT_ERROR_MESSAGES.required,
    }
    )

export const selectOptionSchema = z.object({
    label: z.string(),
    value: z.string(),
})