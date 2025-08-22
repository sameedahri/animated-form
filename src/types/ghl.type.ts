export type GHLPostContactResponse = {
    contact: {
        id: string;
        locationId: string;
        email: string;
        emailLowerCase: string;
        fingerprint: string;
        timezone: string;
        country: string;
        source: string;
        dateAdded: string;
        customField: {
            id: string;
            value: string;
        }[];
        tags: string[];
        __moreField__: string;
    }
}

export type GHLPostContactBody = {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    name?: string;
    dateOfBirth?: string;
    address1: string;
    city: string;
    state?: string;
    country?: string;
    postalCode: string;
    companyName?: string;
    website?: string;
    tags: string[];
    source?: string;
    customField: Record<string, string | string[]>;
}