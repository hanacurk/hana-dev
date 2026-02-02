import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen gradient-mesh">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)]/50 bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-semibold tracking-tight">
            Hana Curk
          </span>
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Contact
            </a>
            <Link
              href="/CV-Hana-Curk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Download CV
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="relative order-2 lg:order-1 lg:flex-1">
            <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-[var(--card-border)] lg:max-w-[400px]">
              <Image
                src="/cv-image.png"
                alt="Hana Curk - Mobile and Frontend Developer"
                fill
                priority
                sizes="(max-width: 1024px) 320px, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity hover:opacity-100" />
            </div>
            {/* Decorative blob */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-[var(--accent)]/20 blur-3xl" />
          </div>

          <div className="order-1 flex flex-1 flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
              Mobile & Frontend Developer
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-[var(--accent)]">Hana</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              I build clean, intuitive apps using SwiftUI, Flutter, Unity, and
              modern web technologies. Focused on creating experiences that feel
              effortless.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/CV-Hana-Curk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[var(--accent-hover)] hover:scale-[1.02]"
              >
                View my CV
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--card-border)] px-6 py-3.5 font-semibold transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-[var(--card-border)] px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            About me
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            I&apos;m a mobile and frontend developer passionate about crafting
            apps that users love. Whether it&apos;s a native iOS experience with
            SwiftUI, a cross-platform app with Flutter, an interactive game in
            Unity, or a polished web interface—I bring a focus on clean code,
            thoughtful UX, and attention to detail.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            I believe great software should feel invisible: intuitive, fast, and
            a joy to use. That&apos;s what I strive for in every project.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-[var(--card-border)] px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Technologies
          </h2>
          <p className="mt-2 text-lg text-[var(--muted)]">
            Tools and frameworks I work with
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SwiftUI",
                desc: "Native iOS development",
                icon: "🍎",
              },
              {
                title: "Flutter",
                desc: "Cross-platform mobile",
                icon: "💙",
              },
              {
                title: "Unity",
                desc: "Games & interactive 3D",
                icon: "🎮",
              },
              {
                title: "Web",
                desc: "React, Next.js & modern JS",
                icon: "🌐",
              },
            ].map((skill) => (
              <div
                key={skill.title}
                className="group rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--accent)]/50 hover:shadow-lg"
              >
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {skill.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-[var(--card-border)] px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Open to new opportunities and interesting projects. Feel free to
            reach out.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/CV-Hana-Curk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </Link>
            <a
              href="mailto:hello@hanacurk.com"
              className="flex items-center gap-2 rounded-full border-2 border-[var(--card-border)] px-6 py-3 font-semibold transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-display text-sm font-medium text-[var(--muted)]">
            © {new Date().getFullYear()} Hana Curk
          </span>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
