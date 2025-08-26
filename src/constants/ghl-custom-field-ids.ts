if (!process.env.NEXT_PUBLIC_GHL_CUSTOM_ROOF_AGE) {
    throw new Error("GHL_CUSTOM_ROOF_AGE is not set")
}

if (!process.env.NEXT_PUBLIC_GHL_CUSTOM_OWNERSHIP) {
    throw new Error("GHL_CUSTOM_OWNERSHIP is not set")
}

if (!process.env.NEXT_PUBLIC_GHL_CUSTOM_CONCERNS) {
    throw new Error("GHL_CUSTOM_CONCERNS is not set")
}

export const GHL_CUSTOM_FIELDS = {
    ROOF_AGE: process.env.NEXT_PUBLIC_GHL_CUSTOM_ROOF_AGE,
    OWNERSHIP: process.env.NEXT_PUBLIC_GHL_CUSTOM_OWNERSHIP,
    CONCERNS: process.env.NEXT_PUBLIC_GHL_CUSTOM_CONCERNS,
}