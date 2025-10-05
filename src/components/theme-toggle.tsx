// /src/components/theme-toggle-switch.tsx

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch"; 
import { Label } from "@/components/ui/label";

export function ThemeToggleSwitch() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
    }
  }, [theme]);

  const handleToggle = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setIsDarkMode(checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-switch" className="sr-only">
        Toggle Theme
      </Label>
      
      {isDarkMode ? (
        <Moon className="h-5 w-5 text-foreground transition-colors" />
      ) : (
        <Sun className="h-5 w-5 text-foreground transition-colors" />
      )}

      <Switch
        id="theme-switch"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-secondary"
      />
    </div>
  );
}