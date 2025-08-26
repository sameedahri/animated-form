"use client"

import ZipcodeForm from "@/forms/zipcode-form";
import { cityFormSchema, concernsFormSchema, emailFormSchema, firstNameFormSchema, lastNameFormSchema, ownershipFormSchema, phoneNumberFormSchema, roofAgeFormSchema, streetAddressFormSchema, zipCodeFormSchema } from "@/lib/schemas/survey-form.schema";
import { createContext, useContext, useState } from "react";
import { defineStepper } from "@stepperize/react";
import { StepType, SurveyFormStepperType } from "@/types/form-provider.type";
import { SurveyFormType } from "@/types/form.type";
import OwnershipForm from "@/forms/ownership-form";
import RoofAgeForm from "@/forms/roof-age-form";
import ConcernsForm from "@/forms/concerns-form";
import FirstNameForm from "@/forms/first-name-form";
import LastNameForm from "@/forms/last-name-form";
import StreetAddressForm from "@/forms/street-address-form";
import CityForm from "@/forms/city-form";
import EmailForm from "@/forms/email-form";
import PhoneNumberForm from "@/forms/phone-number-form";

if (!process.env.NEXT_PUBLIC_SURVEY_QUESTION_ONE) {
    throw new Error("NEXT_PUBLIC_SURVEY_QUESTION_ONE is not set")
}

const QUESTION_ONE = process.env.NEXT_PUBLIC_SURVEY_QUESTION_ONE;

export const surveyFormStepper = defineStepper<StepType<SurveyFormType>[]>(
    {
        id: "1",
        question: QUESTION_ONE,
        Form: ZipcodeForm,
        schema: zipCodeFormSchema,
    },
    {
        id: "2",
        question: "Do you own your home?*",
        Form: OwnershipForm,
        schema: ownershipFormSchema,

    },
    {
        id: "3",
        question: "How old is your roof?*",
        Form: RoofAgeForm,
        schema: roofAgeFormSchema,
    },
    {
        id: "4",
        question: "Are there any pressing concerns with your roof?",
        Form: ConcernsForm,
        schema: concernsFormSchema,
    },
    {
        id: "5",
        question: "What is your First Name?",
        description: "We don't bite, unless you're a taco...We love taco's! 🌮",
        Form: FirstNameForm,
        schema: firstNameFormSchema,
    },
    {
        id: "6",
        question: "And your Last Name?",
        description: "We don't bite, unless you're a taco...We love taco's! 🌮",
        Form: LastNameForm,
        schema: lastNameFormSchema,
    },
    {
        id: "7",
        question: "What is your street address?",
        description: "We'll use satellite imaging to prepare everything before your free inspection.",
        Form: StreetAddressForm,
        schema: streetAddressFormSchema,
    },
    {
        id: "8",
        question: "And your city?",
        Form: CityForm,
        schema: cityFormSchema,
    },
    {
        id: "9",
        question: "What is your Email?",
        Form: EmailForm,
        schema: emailFormSchema,
    },
    {
        id: "10",
        question: "Lastly, what is your phone number?",
        description: `We will not share your info or bug you...we hate bugs 🕷️ *\nI give my consent that Cobex Construction Group may contact me with offers via email, text or phone using artificial voice, or recording. Consent not required for purchase.`,
        Form: PhoneNumberForm,
        schema: phoneNumberFormSchema,
    },
    
)

export const SurveyFormContext = createContext<SurveyFormStepperType>(surveyFormStepper);

type NavDirection = "next" | "prev";
type NavigationDirectionContextValue = {
    direction: NavDirection;
    setDirection: (d: NavDirection) => void;
}

const NavigationDirectionContext = createContext<NavigationDirectionContextValue | null>(null);
export const useNavigationDirection = () => {
    const ctx = useContext(NavigationDirectionContext)
    if (!ctx) {
        throw new Error("useNavigationDirection must be used within a SurveyFormProvider")
    }
    return ctx
}

export const SurveyFormProvider = ({ children }: { children: React.ReactNode }) => {
    const [direction, setDirection] = useState<NavDirection>("next")
    return (
        <SurveyFormContext.Provider value={surveyFormStepper}>
            <NavigationDirectionContext.Provider value={{ direction, setDirection }}>
                <surveyFormStepper.Scoped>
                    {children}
                </surveyFormStepper.Scoped>
            </NavigationDirectionContext.Provider>
        </SurveyFormContext.Provider>
    )
}

export const useSurveyFormStepper = () => {
    const context = useContext(SurveyFormContext);
    if (!context) {
        throw new Error("useSurveyFormStepper must be used within a SurveyFormProvider");
    }
    return context;
}