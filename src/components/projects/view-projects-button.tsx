"use client";

import { FolderKanban } from "lucide-react";
import { GrowOnHover } from "@/components/layout/Animations";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ViewProjectsButton() {
  const router = useRouter();

  return (
    <GrowOnHover scale={1.05} duration={0.15}>
      <Button
        variant={"default"}
        size={"lg"}
        className="text-lg hover:text-accent"
        onClick={() => router.push("/projects")}
      >
        <FolderKanban className="ml-2 h-6 w-6" />
        View My Projects!
      </Button>
    </GrowOnHover>
  );
}
