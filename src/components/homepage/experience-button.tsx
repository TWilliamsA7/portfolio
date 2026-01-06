"use client";

import { BriefcaseBusiness } from "lucide-react";
import { GrowOnHover } from "@/components/layout/Animations";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ExperienceButton() {
  const router = useRouter();

  return (
    <GrowOnHover scale={1.05} duration={0.15}>
      <Button
        variant={"default"}
        size={"lg"}
        className="text-lg hover:text-accent"
        onClick={() => router.push("/experience")}
      >
        <BriefcaseBusiness className="ml-2 h-6 w-6" />
        Check Out My Experience!
      </Button>
    </GrowOnHover>
  );
}
