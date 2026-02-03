import Image from "next/image";
import Link from "next/link";
import {
  SwiftIllustration,
  FlutterIllustration,
  UnityIllustration,
  WebIllustration,
  MoonDecoration,
  SparkleDecoration,
  BlobDecoration,
  SwiftIcon,
  FlutterIcon,
  UnityIcon,
  WebIcon,
} from "./components/illustrations";

export default function Home() {
  return (
    
    <div className="min-h-screen gradient-mesh overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
          <span className="font-display text-xl font-bold tracking-tight">
            Hana Curk
          </span>
          <div className="flex items-center gap-10">
            <a
              href="#about"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              Contact
            </a>
            <Link
              href="/CV-Hana-Curk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            >
              Download CV
            </Link>
          </div>
        </div>
      </nav>
              {/* Cute blob ornaments - positioned in this section */}
              <div className="pointer-events-none absolute inset-0 z-0">
          <div className="blob-float absolute -left-20 top-[160%] h-80 w-80 rounded-full bg-[var(--accent)]/40 blur-2xl" />
          <div className="absolute -right-20 top-[110%] h-96 w-96 rounded-full bg-[var(--accent-2)]/35 blur-2xl" />
          <div className="absolute -left-10 top-[90%] h-72 w-72 rounded-full bg-[var(--accent-3)]/35 blur-2xl" />
        </div>

      {/* Hero - decorative illustrations only in this section, scroll away with it */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 pt-24">
        {/* Decorative illustrations - fixed, stay in viewport top; only visible when hero is on screen */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute right-16 top-32 text-[var(--accent)]">
            <SparkleDecoration />
          </div>
          <div className="absolute right-24 top-44 text-[var(--accent)]">
            <SparkleDecoration />
          </div>
          <div className="absolute bottom-32 left-12 text-[var(--accent-2)]">
            <MoonDecoration />
          </div>
          <div className="absolute left-20 top-1/3 text-[var(--accent-3)]">
            <BlobDecoration />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          {/* Photo - polaroid style */}
          <div className="relative order-2 lg:order-1">
            <div className="art-tilt relative">
              <div className="relative overflow-hidden rounded-2xl bg-[var(--card)] p-4 pb-16 shadow-xl ring-1 ring-[var(--card-border)]">
                <div className="relative aspect-[4/5] w-[200px] overflow-hidden rounded-lg sm:w-[240px] lg:w-[280px]">
                  <Image
                    src="/cv-image.png"
                    alt="Hana Curk"
                    fill
                    priority
                    sizes="(max-width: 1024px) 240px, 280px"
                    className="object-cover"
                  />
                </div>
                <p className="absolute bottom-4 left-4 right-4 font-display text-sm italic text-[var(--muted)]">
                  mobile & frontend dev
                </p>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div className="order-1 flex max-w-2xl flex-col lg:order-2 lg:max-w-xl">
            <p className="font-display text-sm font-medium text-[var(--accent)]">
              hello, I&apos;m
            </p>
            <h1 className="mt-2 font-display text-6xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Hana
            </h1>
            <p className="mt-6 font-display text-2xl font-semibold text-[var(--muted)] sm:text-3xl">
              I build clean, intuitive apps
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              SwiftUI, Flutter, Unity & modern web. Creating experiences that
              feel effortless.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/CV-Hana-Curk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:scale-105"
              >
                View CV
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--card-border)] bg-[var(--card)] px-7 py-3.5 font-semibold transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
        className="relative overflow-hidden border-t border-[var(--card-border)] px-8 py-28"
      >

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="font-display text-sm font-medium text-[var(--accent)]">
            about
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Crafting apps people love
          </h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              I&apos;m a mobile and frontend developer passionate about apps that
              feel right. Native iOS with SwiftUI, cross-platform with Flutter,
              interactive experiences in Unity, or polished web interfaces—each
              gets clean code and thoughtful UX.
            </p>
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              Great software should feel invisible: intuitive, fast, a joy to
              use. That&apos;s what I chase in every project.
            </p>
          </div>
        </div>
      </section>

{/* Skills */}
<section
  id="skills"
  className="relative border-t border-[var(--card-border)] px-8 py-28"
>
  <div className="relative z-10 mx-auto max-w-5xl">
    <p className="font-display text-sm font-medium text-[var(--accent)]">
      tools
    </p>
    <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
      Technologies
    </h2>
    <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Swift",
          desc: "Native iOS",
          Illustration: SwiftIcon,
          tilt: "",
          color: "var(--accent)",
        }
        ,
        {
          title: "Flutter",
          desc: "Cross-platform",
          Illustration: FlutterIcon,
          tilt: "art-tilt",
          color: "var(--accent-2)",
        },
        {
          title: "Unity",
          desc: "Cross-platform & Games",
          Illustration: UnityIcon,
          tilt: "art-tilt-alt",
          color: "var(--accent-3)",
        },
        {
          title: "Web",
          desc: "React, Next.js",
          Illustration: WebIcon,
          tilt: "",
          color: "var(--accent)",
        },
      ].map((skill) => (
        <div
          key={skill.title}
          className={`
            group relative 
            rounded-3xl border-2 border-[var(--card-border)] 
            bg-[var(--card)] p-8 
            transition-all duration-500 ease-out hover:shadow-xl
            hover:border-[var(--accent)]/50
            hover:-rotate-3 hover:translate-y-2
            ${skill.tilt}
          `}
        >
          <div style={{ color: skill.color }}>
            <skill.Illustration />
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold">
            {skill.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{skill.desc}</p>
          <div className="absolute right-4 top-4 h-8 w-8 rounded-full border-2 border-[var(--accent)]/30 opacity-0 transition-all duration-300  group-hover:scale-110" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-[var(--card-border)] px-8 py-28"
      >
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-medium text-[var(--accent)]">
            let&apos;s talk
          </p>
          <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">
            Connect
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Open to new opportunities and interesting projects.
          </p>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/CV-Hana-Curk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:scale-105"
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
              className="flex items-center gap-2 rounded-full border-2 border-[var(--card-border)] bg-[var(--card)] px-8 py-4 font-semibold transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
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
      <footer className="border-t border-[var(--card-border)] px-8 py-10">
        <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between">
          <span className="font-display text-sm font-medium text-[var(--muted)]">
            © {new Date().getFullYear()} Hana Curk
          </span>
          <div className="flex gap-8">
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
