"use client";

import { FileUser } from "lucide-react";
import { GrowOnHover } from "@/components/layout/Animations";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ResumeButton() {
  const router = useRouter();

  return (
    <GrowOnHover scale={1.05} duration={0.15}>
      <Button
        variant={"default"}
        size={"lg"}
        className="text-lg hover:text-accent"
        onClick={() => router.push("/resume.pdf")}
      >
        <FileUser className="ml-2 h-6 w-6" />
        View My Resume!
      </Button>
    </GrowOnHover>
  );
}
