// src/components/layout/Contact.tsx

import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { toast } from "sonner";

const GITHUB_LINK: string = "https://github.com/TWilliamsA7";
const LINKEDIN_LINK: string = "https://www.linkedin.com/in/tai-a-williams/";
const EMAIL_ADDRESS: string = "twilliamsa776@gmail.com";

export default function Contact() {
  const copyEmail = () => {
    navigator.clipboard
      .writeText(EMAIL_ADDRESS)
      .then(() => {
        toast("Copied Email Address to Clipboard!");
      })
      .catch((err) => {
        toast("An error occurred!");
      });
  };

  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer">
        <a href={GITHUB_LINK} className="mx-2">
          <SiGithub className="h-6 w-6 text-primary" />
        </a>
        <a href={LINKEDIN_LINK} className="mx-2">
          <SiLinkedin className="h-6 w-6 text-primary" />
        </a>
        <div className="mx-2" onClick={() => copyEmail()}>
          <Mail className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
