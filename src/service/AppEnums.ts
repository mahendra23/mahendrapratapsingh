export enum CountryCodeEnum {
    NZ = "NZ",
    IN = "IN",
    AU = "AU",
    US = "US",
    GB = "GB",
    CA = "CA"
}

export const CountryNamesEnum: Record<CountryCodeEnum, string> = {
    [CountryCodeEnum.NZ]: "New Zealand (NZ)",
    [CountryCodeEnum.IN]: "India (IN)",
    [CountryCodeEnum.AU]: "Australia (AU)",
    [CountryCodeEnum.US]: "United States (US)",
    [CountryCodeEnum.GB]: "United Kingdom (GB)",
    [CountryCodeEnum.CA]: "Canada (CA)"
};

export const FinancialYearsEnum = {
    DEFAULT: "Select Year",
    PREVIOUS: `${new Date().getFullYear() - 1}-${new Date().getFullYear()}`,
    CURRENT: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
    NEXT: `${new Date().getFullYear() + 1}-${new Date().getFullYear() + 2}`
};