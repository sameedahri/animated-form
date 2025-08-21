import { SurveyFormProvider } from "@/context/survey-form-provider";
import SurveyForm from "@/forms/survey-form";

export default function Home() {
    return (
        <div className="py-20 flex items-center justify-center overflow-y-hidden bg-gray-50">
            <SurveyFormProvider>
                <SurveyForm />
            </SurveyFormProvider>
        </div>
    )
}
