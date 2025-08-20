import { SelectOptions } from "@/types/select-option.type"

export const YES_NO_OPTIONS = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
] as const satisfies SelectOptions

export const ROOF_AGE_OPTIONS = [
    { 
        label: "Under 5 years", 
        value: "Under 5" 
    },
    { 
        label: "Between 5-10 years", 
        value: "Between 5-10" 
    },
    { 
        label: "Between 10-15 years", 
        value: "Between 10-15" 
    },
    { 
        label: "Over 15 years", 
        value: "Over 15" 
    },
] as const satisfies SelectOptions

export const ROOF_CONCERNS_OPTIONS = [
    { 
        label: "My roof is leaking", 
        value: "leaks" 
    },
    { 
        label: "Shingles or tiles are missing", 
        value: "missing_shingles" 
    },
    { 
        label: "We just had a storm and I want an inspection", 
        value: "storm_inspection" 
    },
    { 
        label: "Nothing pressing", 
        value: "nothing_pressing" 
    },
] as const satisfies SelectOptions