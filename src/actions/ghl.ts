"use server";

import { CONTACT_API_URL } from "@/constants/ghl-api-url";
import { surveyFormToGhlContactSchema } from "@/lib/schemas/survey-form.schema";
import { ActionRes } from "@/types/action-response.type";
import { SurveyFormType } from "@/types/form.type";
import { GHLPostContactBody, GHLPostContactResponse } from "@/types/ghl.type";


const API_KEY = process.env.GHL_API_KEY;
if(!API_KEY) throw new Error("GHL_API_KEY is not set");

/**
 * Posts a contact to GHL
 * @param contact - The contact to post
 * @returns The response from GHL
 */
export async function postContact(contact: SurveyFormType): Promise<ActionRes<GHLPostContactResponse>> {
    try {
        const data: GHLPostContactBody = surveyFormToGhlContactSchema.parse(contact)

        const url = CONTACT_API_URL;

        const header = new Headers();
        header.append("Content-Type", "application/json");
        header.append("Authorization", `Bearer ${API_KEY}`);

        const requestSetting = {
            method: "POST",
            body: JSON.stringify(data),
            headers: header,
        }

        const contactRes = await fetch(url, requestSetting)
            .then(res => res.json()) as GHLPostContactResponse

        if (!contactRes.contact) throw new Error("Failed to create contact on GHL")

        return {
            success: true,
            data: contactRes
        }

    } catch (e) {
        const error = e as Error
        return {
            success: false,
            error: error.message
        }
    }
}
