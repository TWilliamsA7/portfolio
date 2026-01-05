// src/components/layout/Contact.tsx

import { SiGithub, SiLinkedin } from "react-icons/si";

const GITHUB_LINK: string = "https://github.com/TWilliamsA7";
const LINKEDIN_LINK: string = "https://www.linkedin.com/in/tai-a-williams/";

export default function Contact() {
  return (
    <div>
      <div className="flex items-center justify-between cursor-pointer">
        <a href={GITHUB_LINK} className="mx-2">
          <SiGithub className="h-6 w-6 text-primary" />
        </a>
        <a href={LINKEDIN_LINK} className="mx-2">
          <SiLinkedin className="h-6 w-6 text-primary" />
        </a>
      </div>
    </div>
  );
}
