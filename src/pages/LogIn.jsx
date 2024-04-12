import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { loginFields, site, countryCode } from "@/constants/FormFields";
import Logo from "../assets/logo/sizzleLogo.png";
import { Separator } from "@/components/ui/separator";
import { SelectCountryInput } from "@/components/ui/selectCountryInput";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";

const LogIn = () => {
  const [selected, setSelected] = useState("");

  return (
    <Card className=" flex flex-col-reverse border-0 w-full h-full bg-[url('/src/assets/hero/heroBackground.jpg')] bg-contain bg-top ">
      <Card className="relative bg-white w-full h-[60vh] rounded-t-5xl object-buttom border-none">
        <Card className="absolute border-none p-4  bg-vivid-orange-600 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 rounded-full">
          <img
            className="inline-flex w-48 h-48 rounded-full "
            alt="sizzle-logo"
            src={Logo}
          />
        </Card>
        <CardHeader className="mt-20">
          <CardTitle className="text-vivid-orange-600 font-bold text-3xl text-center m-4 mt-0 font-sans">
            {site.tagLine}
          </CardTitle>
        </CardHeader>
        <Separator className="text-sm mx-12 font-medium text-muted-foreground">
          Login or Sign up
        </Separator>
        <CardContent className="mx-7 p-4">
          <div className="flex flex-row ">
            <SelectCountryInput
              customLabels={countryCode}
              fullWidth={false}
              showSelectedLabel={false}
              showSecondarySelectedLabel={true}
              showSecondaryOptionLabel={true}
              searchPlaceholder="Search"
              placeholder="Select"
              searchable
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />

            <Input
              id="Phone-Number"
              name="Phone Number"
              type="tel"
              required={true}
              handleClear={() => console.log("Clear")}
              placeholder="Phone Number"
              className=" rounded-xl h-12 ml-5 pl-6 border-gray-300 font-bold text-lg placeholder-shown:font-medium placeholder-shown:text-sm flex-row  focus-visible:ring-vivid-orange-600"
            />
          </div>
          <Button className="rounded-xl h-14 shadow-lg shadow-vivid-orange-50 w-full bg-vivid-orange-600 hover:bg-vivid-orange-700 mt-6 mb-4 text-xl ">
            Continue
          </Button>
        </CardContent>

        <Separator className="text-sm mx-12 font-medium text-muted-foreground">
          or
        </Separator>
        <CardFooter className="flex flex-row justify-center w-30 h-30 mt-5">
          <SocialIcon
            className="m-5  hover:scale-110"
            url="https://google.com"
          />
          <SocialIcon
            className="m-5 hover:scale-110"
            url="https://facebook.com"
          />
        </CardFooter>
      </Card>
    </Card>
  );
};

export default LogIn;
