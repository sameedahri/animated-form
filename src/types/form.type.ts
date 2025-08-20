import { z } from "zod";
import { 
    zipCodeFormSchema,
    ownershipFormSchema,
    roofAgeFormSchema,
    concernsFormSchema,
    firstNameFormSchema,
    lastNameFormSchema,
    phoneNumberFormSchema,
    streetAddressFormSchema,
    cityFormSchema,
    emailFormSchema,
    surveyFormSchema,
} from "@/lib/schemas/survey-form.schema";

export type ZipcodeFormType = z.input<typeof zipCodeFormSchema>

export type OwnershipFormType = z.input<typeof ownershipFormSchema>

export type RoofAgeFormType = z.input<typeof roofAgeFormSchema>

export type ConcernsFormType = z.infer<typeof concernsFormSchema>

export type FirstNameFormType = z.infer<typeof firstNameFormSchema>

export type LastNameFormType = z.input<typeof lastNameFormSchema>

export type PhoneNumberFormType = z.input<typeof phoneNumberFormSchema>

export type StreetAddressFormType = z.input<typeof streetAddressFormSchema>

export type CityFormType = z.input<typeof cityFormSchema>

export type EmailFormType = z.input<typeof emailFormSchema>

export type SurveyFormType = z.infer<typeof surveyFormSchema>