import { z } from "zod";
import { emailSchema, numberSchema, phoneSchema, selectOptionSchema, selectSchema, textSchema } from "./common.schema";
import { ROOF_AGE_OPTIONS, ROOF_CONCERNS_OPTIONS, YES_NO_OPTIONS } from "@/constants/select-options";
import { GHL_CUSTOM_FIELDS } from "@/constants/ghl-custom-field-ids";

export const zipCodeFormSchema = z.object({
    zipCode: numberSchema
        // minimum 3 digits maximum 6 digits
        .min(10000, "Zip code must be at least 5 digits")
        .max(999999, "Zip code should not be greater than 6 digits")
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

/**
 * Converts the survey form to a GHL contact schema
 */
export const surveyFormToGhlContactSchema = surveyFormSchema.transform((data) => {
    return {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        address1: data.streetAddress,
        city: data.city,
        postalCode: data.zipCode.toString(),
        tags: ["lead"],
        customField: {
            [GHL_CUSTOM_FIELDS.ROOF_AGE]: data.roofAge,
            [GHL_CUSTOM_FIELDS.OWNERSHIP]: data.ownership,
            [GHL_CUSTOM_FIELDS.CONCERNS]: data.concerns,
        }
    }
})
