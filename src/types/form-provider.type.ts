import { surveyFormStepper } from "@/context/survey-form-provider";
import { SchemaType } from "./schema.type";
import { FieldValues } from "react-hook-form";

export type StepType<T extends FieldValues> = {
    Form: React.ComponentType;
    schema: SchemaType<T>;
    question: string;
    description?: string;
    id: string;
}

export type SurveyFormStepperType = typeof surveyFormStepper