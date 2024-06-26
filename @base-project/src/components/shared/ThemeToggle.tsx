import * as React from "react";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

interface ThemeToggleProps {
  className?: string;
}

function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  const isDark = () => theme === "dark";

  const toggleTheme = () => {
    document.documentElement.classList[isDark() ? "remove" : "add"]("dark");
    setTheme(isDark() ? "light" : "dark");
  };

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      className={cn("rounded-full", className)}
      onClick={toggleTheme}
    >
      {isDark() ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
    </Button>
  );
}

export default ThemeToggle;
