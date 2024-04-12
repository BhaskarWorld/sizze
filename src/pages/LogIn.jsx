import React, { useState } from "react";
import { CircleX, ChevronDown } from "lucide-react";
import { loginFields, site, countryCode } from "@/constants/FormFields";
import Logo from "../assets/logo/sizzleLogo.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SocialIcon } from "react-social-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SelectCountryInput } from "@/components/ui/selectCountryInput";

const LogIn = () => {
  const [selected, setSelected] = useState("");

  return (
    // Container
    <Card className="flex flex-col-reverse border-0 w-full sm:max-w-100 md:w-[40vw] lg:w-[30vw] h-full bg-transparent">
      {/* Login Form  */}
      <Card className="relative bg-white w-full  h-[57vh] xs:h-[70vh] rounded-t-5xl object-buttom border-none">
        {/* Brand Logo */}
        <Card className="absolute border-none p-2 bg-vivid-orange-600 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 rounded-full">
          <img
            className="inline-flex rounded-full xs:w-40 xs:h-40 w-32 h-32"
            alt="sizzle-logo"
            src={Logo}
          />
        </Card>
        {/* Tag Line  */}
        <CardHeader className="xs:mt-20   mt-8">
          <CardTitle className="text-vivid-orange-600 font-bold text-center mx-4  font-sans xs:text-3xl text-2xl ">
            {site.tagLine}
          </CardTitle>
        </CardHeader>

        <div className="mx-5 2xs:mx-7">
          {/* Separator  */}
          <Separator className="font-medium text-muted-foreground bg-white 2xs:text-sm text-[12px]">
            Login or Sign up
          </Separator>
          {/* Form   */}
          <CardContent className="flex flex-col p-0 py-4">
            {/* Form Container */}
            <div className="flex flex-row items-center justify-between ">
              {/* <SelectCountryInput
                className="h-12 rounded-xl  border-gray-300 focus-visible:ring-vivid-orange-600"
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
              /> */}
              {/* Phone Dial Code Input   */}
              <div className="group relative flex">
                <div className="group absolute right-0 top-1/2 -translate-y-1/2  -translate-x-2/3">
                  <ChevronDown className=" invisible group-hover:visible text-muted-foreground transition transform ease-in-out w-4 h-4" />
                </div>
                <Input
                  id="dial-code"
                  name="Dial Code"
                  required={true}
                  placeholder=""
                  className="rounded-xl h-10  xs:h-12 border-gray-300 font-bold text-lg placeholder-shown:font-medium placeholder-shown:text-sm flex-row  focus-visible:ring-vivid-orange-600"
                  handleClear={(e) => {
                    console.log();
                  }}
                  data-modal-target="default-modal"
                  data-modal-toggle="default-modal"
                />
              </div>
              {/* Phone number input   */}
              <div className="group relative flex grow ">
                <div className="hidden absolute 3xs:block invisible group-hover:visible transition transform  ease-in-out  absolute right-0 top-1/2 -translate-y-1/2  -translate-x-2/3">
                  <CircleX className="text-muted-foreground w-4 h-4" />
                </div>
                <Input
                  id="Phone-Number"
                  name="Phone Number"
                  type="tel"
                  required={true}
                  handleClear={() => {}}
                  placeholder="Phone Number"
                  className="grow rounded-xl h-10 xs:h-12 ml-4 pl-4 border-gray-300 font-bold text-lg placeholder-shown:font-medium placeholder-shown:text-sm focus-visible:ring-vivid-orange-600"
                />
              </div>
            </div>
            {/* Submit Button    */}
            <Button className="grow rounded-xl h-12 xs:h-12 shadow-lg shadow-vivid-orange-50 w-full bg-vivid-orange-600 hover:bg-vivid-orange-700 mt-4 mb-0 xs:mt-6 xs:mb-4 text-xl ">
              Continue
            </Button>
          </CardContent>

          <Separator className="font-medium text-muted-foreground bg-white 2xs:text-sm text-[12px]">
            or
          </Separator>
        </div>
        <CardFooter className="flex flex-row justify-center mt-4 xs:mt-6">
          <SocialIcon
            className="mx-5 hover:scale-110"
            url="https://google.com"
          />
          <SocialIcon
            className="mx-5 hover:scale-110"
            url="https://facebook.com"
          />
        </CardFooter>
      </Card>
    </Card>
  );
};

export default LogIn;
