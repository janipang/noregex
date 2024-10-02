import { STATE_ENUM } from "@/enums/state.enum";
import { NobelType } from "@/types/nobel";
import React, { SetStateAction } from "react";

type HeaderProps = {
  result: number;
  hanldeChangeState: (state: SetStateAction<STATE_ENUM>) => void;
  currentView: STATE_ENUM;
};

const Header: React.FC<HeaderProps> = ({
  result,
  hanldeChangeState,
  currentView,
}) => {
  return (
    <div className="flex justify-between py-6">
      <div className="rounded bg-gray-50 flex items-center">
        <p className="font-semibold text-xl">{result} Result</p>
      </div>
      <div className="rounded bg-gray-50 gap-4 space-x-1 items-center flex">
        <button
          onClick={() => hanldeChangeState(STATE_ENUM.CARD_STATE)}
          className={
            currentView == STATE_ENUM.CARD_STATE
              ? "bg-[#283584] text-white rounded hover:cursor-pointer p-0.5"
              : "bg-white text-black rounded hover:cursor-pointer p-0.5"
          }
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="8"
              width="9.6"
              height="9.6"
              stroke={currentView == STATE_ENUM.CARD_STATE ? "white" : "black"}
              strokeWidth="1.33333"
              strokeLinecap="round"
            />
            <rect
              x="8"
              y="22.4"
              width="9.6"
              height="9.6"
              stroke={currentView == STATE_ENUM.CARD_STATE ? "white" : "black"}
              stroke-width="1.33333"
              stroke-linejoin="round"
            />
            <rect
              x="22.4"
              y="8"
              width="9.6"
              height="9.6"
              stroke={currentView == STATE_ENUM.CARD_STATE ? "white" : "black"}
              stroke-width="1.33333"
              stroke-linejoin="round"
            />
            <rect
              x="22.4"
              y="22.4"
              width="9.6"
              height="9.6"
              stroke={currentView == STATE_ENUM.CARD_STATE ? "white" : "black"}
              stroke-width="1.33333"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => hanldeChangeState(STATE_ENUM.TABLE_STATE)}
          className={
            currentView == STATE_ENUM.TABLE_STATE
              ? "bg-[#283584] text-white rounded hover:cursor-pointer p-0.5"
              : "bg-white text-black rounded hover:cursor-pointer p-0.5"
          }
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8"
              y="8"
              width="9.93103"
              height="9.93103"
              stroke={currentView == STATE_ENUM.TABLE_STATE ? "white" : "black"}
              stroke-width="1.24138"
              stroke-linejoin="round"
            />
            <rect
              x="8"
              y="22.069"
              width="9.93103"
              height="9.93103"
              stroke={currentView == STATE_ENUM.TABLE_STATE ? "white" : "black"}
              stroke-width="1.24138"
              stroke-linejoin="round"
            />
            <path
              d="M22.069 9.65515H32"
              stroke={currentView == STATE_ENUM.TABLE_STATE ? "white" : "black"}
              stroke-width="1.24138"
              stroke-linecap="round"
            />
            <path
              d="M22.069 15.4482H32"
              stroke={currentView == STATE_ENUM.TABLE_STATE ? "white" : "black"}
              stroke-width="1.24138"
              stroke-linecap="round"
            />
            <path
              d="M22.069 23.7241H32"
              stroke={currentView == STATE_ENUM.TABLE_STATE ? "white" : "black"}
              stroke-width="1.24138"
              stroke-linecap="round"
            />
            <path
              d="M22.069 29.5172H32"
              stroke={currentView == STATE_ENUM.TABLE_STATE ? "white" : "black"}
              stroke-width="1.24138"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button className="bg-primary px-4 p-2.5 text-white rounded-lg font-medium">
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default Header;
