import * as Select from "@radix-ui/react-select";
import { forwardRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguagesSelector = () => {
  const [selectedItemIdx, setSelectedItemIdx] = useState({
    name: "English",
    label: "en",
    avatar: "./assets/images/navbar/en.png",
  });
  const { i18n } = useTranslation(["translation"]);
  const menuItems = [
    {
      name: "Arabic",
      label: "ar",
      avatar: "./assets/images/navbar/ar.png",
    },
    {
      name: "English",
      label: "en",
      avatar: "./assets/images/navbar/en.png",
    },
  ];
  useEffect(() => {
    i18n.changeLanguage(selectedItemIdx.label);
    console.log("test use effect");
  }, [selectedItemIdx]);

  return (
    <Select.Root onValueChange={setSelectedItemIdx} value={selectedItemIdx}>
      <div className="w-20 max-w-full">
        <Select.Trigger className="inline-flex items-center justify-between p-1 bg-white border rounded-lg shadow-sm outline-none focus:ring-offset-2 focus:ring-green-600 focus:ring-2">
          {/*Trigger:the button that toggles the select. The Select.Content will position itself by aligning over the trigger.*/}
          <Select.Value>
            <div className="flex items-center">
              <img
                src={selectedItemIdx.avatar}
                className="w-6 h-6 rounded-full"
              />
            </div>
          </Select.Value>
          <Select.Icon className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          {/*Portal:when used, portals the content part into the body.*/}
          <Select.Content
            position="popper"
            avoidCollisions={false}
            className="w-28 max-h-64 mt-2 overflow-y-auto bg-white border rounded-lg shadow-sm text-sm"
          >
            {" "}
            {/*Content:the component that pops out when the select is open*/}
            <Select.Viewport className="">
              {menuItems.map((item, idx) => {
                return (
                  <SelectItem key={idx} value={item}>
                    <img src={item.avatar} className="w-7 h-7 rounded-full" />
                    <div className="flex-1 flex items-center">{item.name}</div>
                  </SelectItem>
                );
              })}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </div>
    </Select.Root>
  );
};

const SelectItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="flex items-center justify-between px-1 cursor-default py-1 duration-150 text-gray-600 data-[state=checked]:text-green-600 data-[state=checked]:bg-indigo-50 data-[highlighted]:text-green-600 data-[highlighted]:bg-green-200 data-[highlighted]:hover:text-green-600 data-[highlighted]:hover:bg-green-250 outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>
          <div className="pr-1 line-clamp-1 flex items-center gap-2">
            {children}
          </div>
        </Select.ItemText>
        <div className="w-4">
          <Select.ItemIndicator>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>{" "}
          </Select.ItemIndicator>
        </div>
      </Select.Item>
    );
  }
);
export default LanguagesSelector;
