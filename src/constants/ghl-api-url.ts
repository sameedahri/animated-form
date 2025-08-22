const BASE_GHL_API_URL = "https://rest.gohighlevel.com/v1"
export const CONTACT_API_URL = `${BASE_GHL_API_URL}/contacts`;
export const CONTACT_PUT_API_URL = (contactId: string) => `${BASE_GHL_API_URL}/contacts/${contactId}`;