import { create } from "zustand";
import type { Country } from "@/components/shared/country-dropdown";

interface CountryStore {
  selectedCountries: Country[];
  setSelectedCountries: (countries: Country[]) => void;
  addSelectedCountry: (country: Country) => void;
  removeSelectedCountry: (country: Country) => void;
}

export const useCountry = create<CountryStore>((set, get) => ({
  selectedCountries: [],
  setSelectedCountries: (countries) => set({ selectedCountries: countries }),
  addSelectedCountry: (country) => {
    const current = get().selectedCountries;
    const exists = current.some((c) => c.alpha2 === country.alpha2); // match by alpha2
    if (!exists) {
      set({ selectedCountries: [...current, country] });
    }
  },
  removeSelectedCountry: (country) => {
    const current = get().selectedCountries;
    set({
      selectedCountries: current.filter((c) => c.alpha2 !== country.alpha2),
    });
  },
}));
