import React from "react";
import { CircleX } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

const SelectCountryInput = ({ className, ...props }) => {
  return (
    <div>
      {/* // <!-- Modal toggle --> */}

      {/* // <!-- Main modal --> */}
      <div
        id="default-modal"
        // tabindex="-1"
        aria-hidden="true"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <CircleX className="w-3 h-3" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}

            {/* <!-- Modal footer --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
SelectCountryInput.displayName = "SelectCountryInput";
export { SelectCountryInput };
