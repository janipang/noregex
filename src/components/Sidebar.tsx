"use client";

import { Category } from "@/constants/category.constant";
import { CountryType } from "@/types/country";
import { useState } from "react";
import Checkbox from "./Checkbox";
import Divider from "./Divider";

type Props = {
  country: CountryType[];
};

export default function Sidebar(props: Props) {
  const [isDropdownCategoryOpen, setIsDropdownCategoryOpen] =
    useState<boolean>(false);
  const [isDropdownCountryOpen, setIsDropdownCountryOpen] =
    useState<boolean>(false);

  const [checkboxStates, setCheckboxStates] = useState(
    Array(6)
      .fill(false)
      .reduce(
        (acc, _, idx) => ({
          ...acc,
          [`checkbox${idx + 1}`]: false,
        }),
        {},
      ),
  );

  const [countryCheckboxState, setCountryCheckBoxState] = useState(
    Array(255)
      .fill(false)
      .reduce(
        (acc, _, idx) => ({
          ...acc,
          [`checkbox${idx + 1}`]: false,
        }),
        {},
      ),
  );

  const toggleDropdown = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
  ) => setter((prev) => !prev);

  interface CheckboxState {
    [key: string]: boolean;
  }

  type SetStateAction = React.Dispatch<React.SetStateAction<CheckboxState>>;

  const handleCheckboxChange = (
    setState: SetStateAction,
    checkboxKey: string,
  ) =>
    setState((prevState) => ({
      ...prevState,
      [checkboxKey]: !prevState[checkboxKey],
    }));

  const renderDropdown = (
    isOpen: boolean,
    title: string,
    toggle: () => void,
    content: JSX.Element,
  ) => (
    <div>
      <button
        type="button"
        className="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-lg group"
        onClick={toggle}
      >
        <span className="flex-1 text-left font-semibold whitespace-nowrap">
          {title}
        </span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="m1 1 4 4 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <ul
        className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {content}
      </ul>
    </div>
  );

  return (
    <div>
      <button className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
        </svg>
      </button>

      <aside className="fixed top-0 left-0 z-40 w-96 h-screen p-4">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <h1 className="text-3xl font-semibold text-primary">NoRegEX</h1>
            </li>
            <li>
              <h1 className="text-xl font-semibold py-4">
                Find Your Nobel Inspiration!
              </h1>
            </li>
            <li>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                className="bg-input w-full p-2.5 rounded-lg"
                placeholder="Search name"
              />
            </li>
            <li>
              <Divider />
            </li>
            <li className="pb-2">
              {renderDropdown(
                isDropdownCategoryOpen,
                "Category",
                () => toggleDropdown(setIsDropdownCategoryOpen),
                <>
                  {Category.map((category, idx) => (
                    <li
                      className={`overflow-hidden transition-all duration-500 space-y-3 my-3 ease-in-out ${
                        isDropdownCategoryOpen
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                      key={idx}
                    >
                      <Checkbox
                        title={category}
                        checked={checkboxStates[`checkbox${idx + 1}`]}
                        onChange={() =>
                          handleCheckboxChange(
                            setCheckboxStates,
                            `checkbox${idx + 1}`,
                          )
                        }
                      />
                    </li>
                  ))}
                </>,
              )}
            </li>
            <li>
              <Divider />
            </li>
            <li className="pb-2">
              {renderDropdown(
                isDropdownCountryOpen,
                "Country",
                () => toggleDropdown(setIsDropdownCountryOpen),
                <>
                  <ul
                    className={`overflow-hidden transition-all duration-500 space-y-3 ease-in-out ${
                      isDropdownCountryOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <input
                      type="text"
                      className="bg-input w-full p-2.5 rounded-lg mt-2 mb-1
                      "
                      placeholder="Search country"
                    />
                    {props.country.map((c, idx) => (
                      <li key={idx}>
                        <Checkbox
                          title={c.name.common}
                          checked={countryCheckboxState[`checkbox${idx + 1}`]}
                          onChange={() =>
                            handleCheckboxChange(
                              setCountryCheckBoxState,
                              `checkbox${idx + 1}`,
                            )
                          }
                        />
                      </li>
                    ))}
                  </ul>
                </>,
              )}
            </li>
            <li>
              <Divider />
            </li>
            <li>
              <label className="block mb-2 font-semibold">Quote</label>
              <input
                type="text"
                className="bg-input w-full p-2.5 rounded-lg"
                placeholder="Search quote"
              />
            </li>
            <li>
              <button className="w-full bg-primary py-2 text-white rounded-xl mb-5 mt-3">
                Search
              </button>
              <button className="w-1/4 py-1 text-gray-400 rounded-xl border border-gray-400">
                <div className="flex items-center justify-center space-x-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_78_580)">
                        <path
                          d="M0.666687 2.66666V6.66666H4.66669"
                          stroke="#B5B5B5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.34002 10C2.77228 11.2269 3.59158 12.2801 4.67446 13.0009C5.75734 13.7217 7.04514 14.0711 8.34383 13.9963C9.64252 13.9216 10.8817 13.4268 11.8748 12.5865C12.8678 11.7462 13.5609 10.606 13.8495 9.33758C14.1381 8.06917 14.0067 6.74131 13.4751 5.55407C12.9435 4.36684 12.0404 3.38454 10.9019 2.75518C9.76345 2.12583 8.45129 1.88352 7.16314 2.06475C5.87499 2.24599 4.68063 2.84095 3.76002 3.76001L0.666687 6.66667"
                          stroke="#B5B5B5"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_78_580">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>Clear</div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}