"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MoonDecoration,
  SparkleDecoration,
  BlobDecoration,
  SwiftIcon,
  FlutterIcon,
  UnityIcon,
  WebIcon,
} from "./components/illustrations";
import { AppStoreIcon } from "./components/AppStoreIcon";

import { useEffect, useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        mobileMenuOpen &&
        !target.closest("header") &&
        !target.closest("nav")
      ) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  return (
<div className="min-h-screen w-full overflow-x-clip gradient-mesh">
{/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-5">
          <span className="font-display text-xl font-bold tracking-tight">
            Hana Čurk
          </span>
          <div className="hidden items-center gap-10 sm:flex">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent-2)]"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent-3)]"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            >
              Contact
            </a>
            <Link
              href="/CV-Hana-Curk.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="CV-Hana-Curk.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            >
              View CV
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
          <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] hover:border-[var(--accent)]/30 active:scale-95 sm:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="relative flex h-5 w-6 flex-col items-center justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
        </div>
                {/* Mobile menu */}
                {mobileMenuOpen && (
          <div className="mobile-menu-enter border-t border-[var(--card-border)] bg-[var(--card)]/98 shadow-lg sm:hidden">
            <nav className="flex flex-col gap-1 px-4 py-5">
              <a
                href="#about"
                onClick={(e) => {
                  scrollToSection(e, "about");
                  setMobileMenuOpen(false);
                }}
                className="mobile-menu-link rounded-xl px-5 py-3.5 text-base font-semibold text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] active:scale-[0.98]"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => {
                  scrollToSection(e, "skills");
                  setMobileMenuOpen(false);
                }}
                className="mobile-menu-link rounded-xl px-5 py-3.5 text-base font-semibold text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent-2)]/10 hover:text-[var(--accent-2)] active:scale-[0.98]"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  scrollToSection(e, "projects");
                  setMobileMenuOpen(false);
                }}
                className="mobile-menu-link rounded-xl px-5 py-3.5 text-base font-semibold text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent-3)]/10 hover:text-[var(--accent-3)] active:scale-[0.98]"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  scrollToSection(e, "contact");
                  setMobileMenuOpen(false);
                }}
                className="mobile-menu-link rounded-xl px-5 py-3.5 text-base font-semibold text-[var(--muted)] transition-all duration-200 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] active:scale-[0.98]"
              >
                Contact
              </a>
              <Link
                href="/CV-Hana-Curk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Hana-Curk.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-menu-link mt-2 flex items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                View CV
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </nav>
      {/* Hero - decorative illustrations only in this section, scroll away with it */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 sm:px-8 sm:pt-24">
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

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 sm:gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          {/* Photo - polaroid style, first on mobile */}
          <div className="relative order-1 lg:order-1">
            <div className="art-tilt relative">
              <div className="relative overflow-hidden rounded-2xl bg-[var(--card)] p-4 pb-16 shadow-xl ring-1 ring-[var(--card-border)]">
                <div className="relative aspect-[4/5] w-[200px] overflow-hidden rounded-lg sm:w-[240px] lg:w-[280px]">
                  <Image
                    src="/cv-image.JPG"
                    alt="Hana Curk"
                    fill
                    priority
                    sizes="(max-width: 1024px) 240px, 280px"
                    className="object-cover scale-120"
                  />
                </div>
                <p className="absolute bottom-4 left-4 right-4 font-display text-sm italic text-[var(--muted)]">
                  mobile & frontend dev
                </p>
              </div>
            </div>
          </div>

          {/* Text block - second on mobile */}
          <div className="order-2 flex max-w-2xl flex-col text-center sm:text-left lg:order-2 lg:max-w-xl">
            <p className="font-display text-sm font-medium text-[var(--accent)]">
              hello, I&apos;m
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              Hana
            </h1>
            <p className="mt-4 font-display text-xl font-semibold text-[var(--muted)] sm:mt-6 sm:text-2xl lg:text-3xl">
              App developer
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Swift, Flutter, Unity & modern web.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:justify-start sm:gap-4 lg:justify-start">
              <Link
                href="/CV-Hana-Curk.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Hana-Curk.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 font-semibold text-white shadow-lg transition-all hover:opacity-90 hover:scale-105 sm:px-7 sm:py-3.5"
              >
                View CV
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--card-border)] bg-[var(--card)] px-5 py-3 font-semibold transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] sm:px-7 sm:py-3.5"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About - blobs fixed to this section, scroll away with it */}
      <section
        id="about"
        className="relative overflow-hidden border-t border-[var(--card-border)] px-4 py-16 sm:px-8 sm:py-28"
      >
        {/* Blobs positioned in this section - scroll with content */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden sm:block">
          <div className="absolute -left-20 top-[5%] h-40 w-40 rounded-full bg-[var(--accent)]/40 blur-2xl" />
          <div className="absolute -right-20 top-[10%] h-96 w-96 rounded-full bg-[var(--accent-2)]/35 blur-2xl" />
          <div className="absolute -left-10 bottom-[5%] h-72 w-72 rounded-full bg-[var(--accent-3)]/35 blur-2xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="font-display text-sm font-medium text-[var(--accent)]">
            about
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Mobile developer, <br />
            based in Ljubljana, Slovenia
          </h2>
          <div className="mt-8 grid gap-8 sm:mt-12 sm:gap-12 ">
            <p className="text-lg leading-relaxed text-[var(--muted)]">
            I studied at Faculty of Computer and information sciences, where I gained a lot of technical knowledge and practical experiences. While studying I also worked on personal projects and some student jobs in the field of computer science. I developed a few websites, some using wordpress and some with react, nextjs or just vanilla js. After college I was working as a mobile developer for almost 4 years. I gained a lot of experience with product oriented work and working with a team.
            </p>
          </div>
        </div>
      </section>

{/* Skills */}
<section
  id="skills"
  className="relative border-t border-[var(--card-border)] px-4 py-16 sm:px-8 sm:py-28"
>
  <div className="relative z-10 mx-auto max-w-5xl">
    <p className="font-display text-sm font-medium text-[var(--accent)]">
      tools
    </p>
    <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
      Technologies
    </h2>
    <div className="mx-auto mt-10 grid gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
          style={{ borderColor: skill.color }} 
          className={`
            group relative 
            rounded-3xl border-2 border-[var(--${skill.color})]
            bg-[var(--card)] p-8 
            transition-all duration-500 ease-out
            hover:border-[var(--${skill.color})]/50
            ${skill.tilt}
          `}
        >
          <div style={{ color: skill.color }}>
            <skill.Illustration />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold sm:mt-6 sm:text-2xl">
            {skill.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{skill.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Projects */}
      <section
        id="projects"
        className="relative border-t border-[var(--card-border)] px-4 py-16 sm:px-8 sm:py-28"
      >
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="font-display text-sm font-medium text-[var(--accent)]">
            work
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <div className="mt-10 flex flex-col gap-8 sm:mt-16 lg:gap-12">
            {/* Speech Blubs */}
            <article
              style={{ borderColor: "var(--accent)" }}
              className="rounded-3xl border-2 bg-[var(--card)] p-6 transition-all duration-500 ease-out hover:opacity-95 sm:p-8"
            >
              <button
                type="button"
                onClick={() => toggleProject(0)}
                className="flex w-full cursor-pointer flex-col gap-4 text-left sm:flex-row sm:items-center sm:gap-6"
                aria-expanded={expandedProjects.has(0)}
              >
                <AppStoreIcon
                  appId="1239522573"
                  alt="Speech Blubs app icon"
                  className="h-24 w-24 shrink-0 rounded-[22%] object-cover shadow-md sm:h-28 sm:w-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      Speech Blubs
                    </h3>
                    
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Blub Blub
                  </p>
                </div>
                <span className="text-sm font-medium text-[var(--muted)]">
                      iOS App – Swift
                    </span>
                <svg
                  className={`h-6 w-6 shrink-0 text-[var(--muted)] transition-transform duration-300 ease-out sm:ml-2 ${expandedProjects.has(0) ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: expandedProjects.has(0) ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-4 border-t border-[var(--card-border)] pt-4">
                    <a
                      href="https://apps.apple.com/us/app/speech-blubs-language-therapy/id1239522573"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:underline"
                    >
                      View on App Store
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                      Speech Blubs is a speech development app for children, designed to support early language learning through interactive exercises and video modeling.
                    </p>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      My role
                    </p>
                    <p className="text-[var(--muted)]">iOS Developer (Swift)</p>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      Responsibilities
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--muted)]">
                      <li>Built and maintained production iOS features</li>
                      <li>Implemented UI screens and user flows</li>
                      <li>Implemented subscription and premium content flows</li>
                      <li>Integrated backend APIs</li>
                      <li>Contributed to feature releases and bug fixes</li>
                      <li>Participated in App Store releases and maintenance</li>
                    </ul>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      Tech stack
                    </p>
                    <p className="text-[var(--muted)]">
                      Swift, UIKit/SwiftUI, REST APIs, Cross-platform deployment
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Speech Blubs Pro */}
            <article
              style={{ borderColor: "var(--accent-2)" }}
              className="rounded-3xl border-2 bg-[var(--card)] p-6 transition-all duration-500 ease-out hover:opacity-95 sm:p-8"
            >
              <button
                type="button"
                onClick={() => toggleProject(1)}
                className="flex w-full cursor-pointer flex-col gap-4 text-left sm:flex-row sm:items-center sm:gap-6"
                aria-expanded={expandedProjects.has(1)}
              >
                <AppStoreIcon
                  appId="1669028733"
                  alt="Speech Blubs Pro app icon"
                  className="h-24 w-24 shrink-0 rounded-[22%] object-cover shadow-md sm:h-28 sm:w-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      Speech Blubs Pro
                    </h3>
                   
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Blub Blub
                  </p>
                </div>
                <span className="text-sm font-medium text-[var(--muted)]">
                      Cross-platform App – Flutter
                    </span>
                <svg
                  className={`h-6 w-6 shrink-0 text-[var(--muted)] transition-transform duration-300 ease-out sm:ml-2 ${expandedProjects.has(1) ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: expandedProjects.has(1) ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-4 border-t border-[var(--card-border)] pt-4">
                    <a
                      href="https://apps.apple.com/us/app/speech-blubs-pro-made-for-slps/id1669028733"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:underline"
                    >
                      View on App Store
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                      Speech Blubs Pro is a professional version of the Speech Blubs app designed for therapists and educators.
                    </p>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      My role
                    </p>
                    <p className="text-[var(--muted)]">Mobile Developer (Flutter)</p>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      Responsibilities
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--muted)]">
                      <li>Developed cross-platform features using Flutter</li>
                      <li>Built and maintained UI components</li>
                      <li>Collaborated with backend and product teams</li>
                      <li>Ensured stable production releases</li>
                    </ul>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      Tech stack
                    </p>
                    <p className="text-[var(--muted)]">
                      Flutter, Dart, REST APIs, App Store deployment
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Nimi Adventures - App Store lists as "Nimi Kids" */}
            <article
              style={{ borderColor: "var(--accent-3)" }}
              className="rounded-3xl border-2 bg-[var(--card)] p-6 transition-all duration-500 ease-out hover:opacity-95 sm:p-8"
            >
              <button
                type="button"
                onClick={() => toggleProject(2)}
                className="flex w-full cursor-pointer flex-col gap-4 text-left sm:flex-row sm:items-center sm:gap-6"
                aria-expanded={expandedProjects.has(2)}
              >
                <AppStoreIcon
                  appId="6502954339"
                  alt="Nimi Kids app icon"
                  className="h-24 w-24 shrink-0 rounded-[22%] object-cover shadow-md sm:h-28 sm:w-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      Nimi Adventures
                    </h3>
                    
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Blub Blub
                  </p>
                </div>
                <span className="text-sm font-medium text-[var(--muted)]">
                      Game App – Unity
                    </span>
                <svg
                  className={`h-6 w-6 shrink-0 text-[var(--muted)] transition-transform duration-300 ease-out sm:ml-2 ${expandedProjects.has(2) ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: expandedProjects.has(2) ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="mt-4 border-t border-[var(--card-border)] pt-4">
                    <a
                      href="https://apps.apple.com/us/app/nimi-kids-learning-games/id6502954339"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] transition-colors hover:underline"
                    >
                      View on App Store
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
                      Nimi Adventures is an interactive educational game designed to engage children in playful learning experiences.
                    </p>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      My role
                    </p>
                    <p className="text-[var(--muted)]">Unity Developer</p>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      Responsibilities
                    </p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-[var(--muted)]">
                      <li>Implemented core gameplay systems</li>
                      <li>Built interactive UI elements</li>
                      <li>Implemented subscription and premium content flows</li>
                      <li>Integrated app navigation and progression logic</li>
                      <li>Contributed to production-ready builds</li>
                      <li>Collaborated with designers and product managers</li>
                    </ul>
                    <p className="mt-4 font-semibold text-[var(--foreground)]">
                      Tech stack
                    </p>
                    <p className="text-[var(--muted)]">
                      Unity, C#, Mobile optimization, App Store deployment
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-[var(--card-border)] px-4 py-16 sm:px-8 sm:py-28"
      >
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-display text-sm font-medium text-[var(--accent)]">
            let&apos;s talk
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Connect
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] sm:mt-6 sm:text-lg">
            Open to new opportunities and interesting projects.
          </p>
          <div className="mt-10 flex flex-col items-center gap-8 sm:mt-14">
            <ul className="flex flex-col gap-3 text-center sm:flex-row sm:gap-8">
              <li>
                <a
                  href="mailto:hana.curk@gmail.com"
                  className="inline-flex items-center gap-2 font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hana.curk@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hana-%C4%8Durk-b77a9136/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hanacurk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                >
                  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] px-4 py-8 sm:px-8 sm:py-10">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-display text-sm font-medium text-[var(--muted)]">
            © {new Date().getFullYear()} Hana Čurk
          </span>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/hana-%C4%8Durk-b77a9136/"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hanacurk"
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
