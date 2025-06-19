"use client";

import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react";

const ThemeSwitcher = () => {
  return (
    <Button variant="ghost" size={"sm"}>
      <Sun size={16} className={"text-muted-foreground"} />
    </Button>
  );
};

export { ThemeSwitcher };
