// src/components/layout/main-footer.tsx

"use client";

import Contact from "@/components/layout/Contact";

export default function MainFooter() {
  return (
    <footer
      className={`bottom-0 left-0 w-full 
            transition-all duration-300 ease-in-out
            bg-transparent shadow-none
            `}
    >
      <div className="flex items-center w-full max-w-7xl px-4 md:px-8 my-4">
        <Contact />
      </div>
    </footer>
  );
}
