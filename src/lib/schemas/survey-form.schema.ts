import { z } from "zod";
import { emailSchema, numberSchema, phoneSchema, selectOptionSchema, selectSchema, textSchema } from "./common.schema";
import { ROOF_AGE_OPTIONS, ROOF_CONCERNS_OPTIONS, YES_NO_OPTIONS } from "@/constants/select-options";

export const zipCodeFormSchema = z.object({
    zipCode: numberSchema
        .min(10000, "Zip code must be at least 6 digits")
        .max(99999, "Zip code must be less than 6 digits"),
})

export const ownershipFormSchema = z.object({
    ownership: selectSchema(YES_NO_OPTIONS)
})

export const roofAgeFormSchema = z.object({
    roofAge: selectSchema(ROOF_AGE_OPTIONS)
})

export const concernsFormSchema = z.object({
    concerns: selectSchema(ROOF_CONCERNS_OPTIONS)
})

export const firstNameFormSchema = z.object({
    firstName: textSchema("base")
})

export const lastNameFormSchema = z.object({
    lastName: textSchema("base")
})

export const streetAddressFormSchema = z.object({
    streetAddress: textSchema("base")
})

export const cityFormSchema = z.object({
    city: textSchema("base")
})

export const emailFormSchema = z.object({
    email: emailSchema
})

export const phoneNumberFormSchema = z.object({
    phoneNumber: phoneSchema
})

export const surveyFormSchema = z.object({
    ...zipCodeFormSchema.shape,
    ...ownershipFormSchema.shape,
    ...roofAgeFormSchema.shape,
    ...concernsFormSchema.shape,
    ...firstNameFormSchema.shape,
    ...lastNameFormSchema.shape,
    ...phoneNumberFormSchema.shape,
    ...streetAddressFormSchema.shape,
    ...cityFormSchema.shape,
    ...emailFormSchema.shape,
})

// export const surveyFormSchema = zipCodeFormSchema
//     .extend(ownershipFormSchema)
//     .extend(roofAgeFormSchema)
//     .extend(concernsFormSchema)
//     .extend(firstNameFormSchema)
//     .extend(lastNameFormSchema)
//     .extend(phoneNumberFormSchema)
//     .extend(streetAddressFormSchema)
//     .extend(cityFormSchema)
//     .extend(emailFormSchema)
