import {
  Code2,
  BriefcaseBusiness,
  Mail,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="border-t border-white/10 px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          Contact
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-100 md:text-5xl">
              Let's build something
              <span className="text-violet-400"> meaningful.</span>
            </h2>

            <p className="mt-6 max-w-lg leading-7 text-gray-400">
              I'm interested in backend development, Generative AI, and
              building practical AI-powered systems. Have a project or
              opportunity in mind? Let's connect.
            </p>


            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shahzaibkaramat007@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-400 px-6 py-3 font-medium text-black transition hover:bg-violet-300"
            >
              Get in touch
              <ArrowUpRight size={18} />
            </a>

          </div>

          <div className="flex flex-col justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shahzaibkaramat007@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-white/10 p-5 transition hover:border-violet-400/50"
            >
              <Mail className="text-violet-400" size={22} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="mt-1 text-gray-200">
                  shahzaibkaramat007@gmail.com
                </p>
              </div>
              <ArrowUpRight className="ml-auto text-gray-500" size={18} />
            </a>

            <a
              href="https://github.com/shahzaibkaramat67-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 p-5 transition hover:border-violet-400/50"
            >
              <Code2 className="text-violet-400" size={22} />
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="mt-1 text-gray-200">
                  Explore my projects
                </p>
              </div>
              <ArrowUpRight className="ml-auto text-gray-500" size={18} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-white/10 p-5 transition hover:border-violet-400/50"
            >
              <BriefcaseBusiness className="text-violet-400" size={22} />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="mt-1 text-gray-200">
                  Let's connect professionally
                </p>
              </div>
              <ArrowUpRight className="ml-auto text-gray-500" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
