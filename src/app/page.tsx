import { SurveyFormProvider } from "@/context/survey-form-provider";
import SurveyForm from "@/forms/survey-form";

export default function Home() {
    return (
        <div className="min-h-svh flex items-center justify-center">
            <SurveyFormProvider>
                <SurveyForm />
            </SurveyFormProvider>
        </div>
    )
}
