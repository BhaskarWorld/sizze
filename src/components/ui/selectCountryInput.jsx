import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryCode } from "@/constants/FormFields";
const SelectCountryInput = () => {
  return (
    <Select>
      <SelectTrigger className="w-52  rounded-xl h-12  border-gray-300 focus:ring-vivid-orange-600">
        <div className="flex-grow flex items-center justify-center font-medium text-gray-500">
          <SelectValue placeholder="Select" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {countryCode.map((country, id) => {
            return (
              <SelectItem key={id} value={country.code}>
                <img
                  className="inline-flex w-8 h-8 rounded-xl "
                  alt={country.name}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                />{" "}
                <span className="font-bold">{country.dialCode}</span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
SelectCountryInput.displayName = "SelectCountryInput";
export { SelectCountryInput };
