import { Button } from "@/components/ui/button";
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

import { signupFields, site } from "@/constants/FormFields";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/sizzleLogo.png";

const SignUp = () => {
  return (
    <div className=" w-[800px] flex flex-row">
      <div className="flex flex-row items-center flex-1  flex-grow py-10 ">
        <Card className="h-full bg-vivid-orange-600 flex flex-col justify-center items-center shadow-2xl rounded-l-2xl flex-1  flex-grow ">
          <img
            className="h-48 w-48 rounded-full "
            src={Logo}
            alt="Sizzle-Logo"
          />
        </Card>
      </div>

      <Card className="w-[500px] py-9 shadow-xl rounded-2xl">
        <CardHeader className="mb-5">
          <CardTitle className="text-vivid-orange-600 text-6xl text-center">
            {site.title}
          </CardTitle>
          <CardDescription className="text-center text-lg text-gray-700 text-muted-foreground font-mono font-bold ">
            {site.tagLine}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              {signupFields.map((field) => {
                return (
                  <div key={field.id} className="flex flex-col space-y-1.5">
                    <Label
                      htmlFor={field.labelFor}
                      className="text-md text-vivid-orange-600"
                    >
                      {field.labelText}
                    </Label>
                    <Input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      required={field.isRequired}
                      placeholder={field.placeholder}
                      className="focus-visible:ring-vivid-orange-600"
                    />
                  </div>
                );
              })}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex  flex-col justify-center mt-5">
          <Button className="bg-vivid-orange-600 hover:bg-vivid-orange-700">
            Sign Up
          </Button>

          <Label className="text-gray-600 mt-5 text-muted-foreground">
            Already an user?
            <span>
              <Label className="text-vivid-orange-600  cursor-pointer hover:text-vivid-orange-700 ">
                {" "}
                <Link to="/login">Log In</Link>
              </Label>
            </span>
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
