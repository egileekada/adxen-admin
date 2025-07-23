"use client";

import type React from "react";
import { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { countries } from "country-data-list";
import ReactCountryFlag from "react-country-flag";
import CustomInput from "./custom-input";

export interface Country {
  alpha2: string;
  alpha3: string;
  countryCallingCodes: string[];
  currencies: string[];
  emoji?: string;
  ioc: string;
  languages: string[];
  name: string;
  status: string;
}

interface CurrencyOption {
  currency: string;
  country: Country;
  countryCode: string;
  countryName: string;
}

interface CurrencyComboProps {
  value?: { currency: string; amount: string };
  onChange?: (value: { currency: string; amount: string }) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export default function CurrencyCombo({
  value = { currency: "USD", amount: "" },
  onChange,
  placeholder = "0.00",
  label,
  className = "",
}: CurrencyComboProps) {
  const [internalValue, setInternalValue] = useState(value);

  // Process country data to create currency options
  const currencyOptions = useMemo(() => {
    const options = countries.all.filter(
      (country: Country) =>
        country.emoji &&
        country.status !== "deleted" &&
        country.ioc !== "PRK" &&
        country.currencies &&
        country.currencies.length > 0
    );

    const currencyMap = new Map<string, CurrencyOption>();

    options.forEach((country: Country) => {
      country.currencies.forEach((currency: string) => {
        // Prioritize certain countries for common currencies
        const existingOption = currencyMap.get(currency);
        const shouldReplace =
          !existingOption ||
          (currency === "USD" && country.alpha2 === "US") ||
          (currency === "EUR" && country.alpha2 === "DE") ||
          (currency === "GBP" && country.alpha2 === "GB") ||
          (currency === "JPY" && country.alpha2 === "JP") ||
          (currency === "CAD" && country.alpha2 === "CA") ||
          (currency === "AUD" && country.alpha2 === "AU") ||
          (currency === "NGN" && country.alpha2 === "NG");

        if (shouldReplace) {
          currencyMap.set(currency, {
            currency,
            country,
            countryCode: country.alpha2,
            countryName: country.name,
          });
        }
      });
    });

    return Array.from(currencyMap.values()).sort((a, b) => {
      // Sort popular currencies first
      const popularOrder = ["USD", "EUR", "GBP", "JPY", "CAD", "AUD", "NGN"];
      const aIndex = popularOrder.indexOf(a.currency);
      const bIndex = popularOrder.indexOf(b.currency);

      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;

      return a.currency.localeCompare(b.currency);
    });
  }, []);

  const handleCurrencyChange = (currency: string) => {
    const newValue = { ...internalValue, currency };
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    const newValue = { ...internalValue, amount };
    setInternalValue(newValue);
    onChange?.(newValue);
  };

  const selectedOption = currencyOptions.find(
    (option) => option.currency === internalValue.currency
  );

  return (
    <div className={`space-y-2 ${className}`}>
      {label && <Label>{label}</Label>}
      <div className="flex">
        <Select
          value={internalValue.currency}
          onValueChange={handleCurrencyChange}
        >
          <SelectTrigger className="w-30 rounded-r-none border-r-0 focus:z-10 bg-accent ">
            <SelectValue>
              {selectedOption && (
                <div className="flex items-center gap-2">
                  <ReactCountryFlag
                    countryCode={selectedOption.countryCode}
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                    }}
                    title={selectedOption.countryName}
                  />
                  <span className="font-medium">{selectedOption.currency}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className="max-h-60">
            {currencyOptions.map((option) => (
              <SelectItem
                key={`${option.currency}-${option.countryCode}`}
                value={option.currency}
              >
                <div className="flex items-center gap-3">
                  <ReactCountryFlag
                    countryCode={option.countryCode}
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                    }}
                    title={option.countryName}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{option.currency}</span>
                    <span className="text-xs text-muted-foreground">
                      {option.countryName}
                    </span>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="relative flex-1">
          <CustomInput
            type="text"
            value={internalValue.amount}
            onChange={handleAmountChange}
            placeholder={placeholder}
            className="rounded-l-none focus:z-10 text-right font-medium pr-3 text-[20px] bg-accent"
            inputMode="decimal"
            style={{
              paddingLeft: internalValue.amount
                ? `${internalValue.amount.length * 0.6 + 2}rem`
                : "0.75rem",
            }}
          />
          {internalValue.amount && (
            <span
              className="absolute top-1/2 -translate-y-1/2 font-medium pointer-events-none tracking-wide text-muted text-[20px]"
              style={{
                right: `${internalValue.amount.length * 0.5 + 1.3}rem`,
              }}
            >
              $
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
