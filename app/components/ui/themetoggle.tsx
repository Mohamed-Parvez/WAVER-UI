"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const [isOn, setIsOn] = useState(false);
  const [icon, setIcon] = useState(<Sun className="h-[1.2rem] w-[1.2rem]" />);
  const handleClick = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleClick();
          if (!isOn) {
            setTheme("dark");
            setIcon(<Moon className="h-[1.2rem] w-[1.2rem]" />);
          } else {
            setTheme("light");
            setIcon(<Sun className="h-[1.2rem] w-[1.2rem]" />);
          }
        }}
      >
        {icon}
      </button>
    </div>
  );
}
