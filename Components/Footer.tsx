
import { ArrowUp, Code2, BriefcaseBusiness } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
       <p className="text-sm text-gray-500">
  © 2026 Shahzaib Karamat. All rights reserved.
</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/shahzaibkaramat67-coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition hover:text-violet-400"
          >
            <Code2 size={19} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition hover:text-violet-400"
          >
            <BriefcaseBusiness size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-violet-400 hover:text-violet-400"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
