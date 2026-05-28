import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Mail,
  ChevronDown,
  Sparkles,
  MessageCircle,
} from "lucide-react";

/*
  Duke AI Summit Showcase Website

  IMAGE INSTRUCTIONS:

  Create this folder inside your project:

  public/images

  Then add images with these exact filenames:

  kiosk-1.png
  kiosk-2.png
  kiosk-3.png
  kiosk-4.png
  main-game.png
  sophie-pentz.png
  jake-janavicius.png
  axel-blom.png
  mallika-vairavan.png
*/

const imagePath = (fileName) => `${import.meta.env.BASE_URL}images/${fileName}`;

const CONTENT = {
  presenter: "Nubia Nurain Khan",
  event: "Duke AI in Education Summit Showcase Demo",
  title: "Curating with AI",
  subtitle:
    "Virtual Exhibitions, Student Agency, and Critical Pedagogy in Art History",
  heroTagline:
    "A hands-on model for teaching critical AI literacy through virtual exhibition-making.",
  description:
    "This demonstration presents a teaching experiment that integrated AI agents, virtual reality, and curatorial practice into ARTHIST 102D: Introduction to World Art History from 1200 to the Present. Centered on Epochal Assemblages: Digital Curation, the project used FrameVR to help students understand museum exhibitions as constructed interpretive arguments rather than fixed narratives.",

  contactEmail: "nubianurain@gmail.com",

  kioskImages: [
    {
      label: "Epochal Assemblages: Digital Curation",
      caption:
        "An interactive FrameVR environment where visitors make curatorial choices and reflect on how exhibition rules shape interpretation.",
      image: imagePath("kiosk-1.png"),
    },
    {
      label: "Curatorial Constraints",
      caption:
        "The project turns exhibition-making into a playable system: selection, placement, comparison, and reflection become part of the learning process.",
      image: imagePath("kiosk-2.png"),
    },
    {
      label: "AI as a Teaching Object",
      caption:
        "Students encountered AI not only as a tool, but as something to use critically within curatorial, spatial, and interpretive decision-making.",
      image: imagePath("kiosk-3.png"),
    },
    {
      label: "Student Virtual Exhibitions",
      caption:
        "Students built their own FrameVR exhibitions, using digital space to connect artworks, arguments, labels, and viewer movement.",
      image: imagePath("kiosk-4.png"),
    },
  ],

  mainProject: {
    title: "Epochal Assemblages: Digital Curation",
    creator: "Nubia Nurain Khan",
    eyebrow: "Main FrameVR Game",
    url: "https://framevr.io/curatorial-constraints-cmac-exhibition",
    image: imagePath("main-game.png"),
    description:
      "This interactive curatorial game was developed for the 2026 CMAC PhD student exhibition and later adapted as a pedagogical model for ARTHIST 102D. Visitors enter a museum-like FrameVR environment, make exhibition choices, and reflect on how constraints, spatial arrangement, and interpretation shape curatorial meaning.",
  },

  studentProjects: [
    {
      title: "Reframing Cultural Objects",
      creator: "Sophie Pentz",
      eyebrow: "Student FrameVR Exhibition",
      url: "https://framevr.io/arthist102-project",
      image: imagePath("sophie-pentz.png"),
      description:
        "Sophie's exhibition uses VR to question museum authority, provenance, and cultural displacement. Her project includes an AI agent named Willeta, AI-assisted curatorial elements, and a Claude-coded provenance map to help viewers reflect on how objects are separated from their cultural contexts.",
    },
    {
      title: "Hidden in Technique",
      creator: "Jake Janavicius",
      eyebrow: "Student FrameVR Exhibition",
      url: "https://framevr.io/hidden-in-technique",
      image: imagePath("jake-janavicius.png"),
      description:
        "Jake's exhibition examines how technical innovation helped sacred works feel miraculous to early modern Catholic audiences. He used FrameVR's 3D modeling tools to create models of sculpture and architecture, making technique, illusion, and spiritual effect central to the viewer's experience.",
    },
    {
      title: "Visions of Creation",
      creator: "Axel Blom",
      eyebrow: "Student FrameVR Exhibition",
      url: "https://framevr.io/arthist-final",
      image: imagePath("axel-blom.png"),
      description:
        "Axel's exhibition explores how different cultures visualize cosmic and human origins through sacred narratives. His FrameVR environment uses an ethereal, futuristic, and cosmic atmosphere to place creation stories in an immersive space beyond the limits of a conventional gallery.",
    },
    {
      title: "The Language of Gold",
      creator: "Mallika Vairavan",
      eyebrow: "Student FrameVR Exhibition",
      url: "https://framevr.io/arthist102gallery3",
      image: imagePath("mallika-vairavan.png"),
      description:
        "Mallika's exhibition argues that gold functions as a visual language of religious, aristocratic, sensual, and imperial power. She learned Blender in a short period, used AI as a tutorial and modeling aid, and used FrameVR's AI tool to help present artworks in spatially specific ways.",
    },
  ],

  starterQuestions: [
    "How should we evaluate AI-assisted student work when the final product is spatial, visual, and interpretive?",
    "What kinds of AI use support student agency rather than replacing student thinking?",
  ],
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function KioskCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {items.map((item, itemIndex) => (
        <motion.div
          key={item.label}
          initial={false}
          animate={{ opacity: itemIndex === index ? 1 : 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
        >
          {!imageError[item.image] ? (
            <img
              src={item.image}
              alt={item.label}
              onError={() =>
                setImageError((prev) => ({ ...prev, [item.image]: true }))
              }
              className="h-full w-full object-cover object-center opacity-70"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.20),_transparent_30%),linear-gradient(135deg,_#111827,_#000000_55%,_#1f2937)]" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/75 md:text-sm">
              {CONTENT.event}
            </p>
            <p className="mt-2 text-sm text-white/80">
              Presented by {CONTENT.presenter}
            </p>
          </div>

          <div className="rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.25em] backdrop-blur-md">
            Showcase Demo
          </div>
        </header>

        <main className="max-w-5xl pb-16 pt-[32vh] md:pt-[34vh] lg:pt-[36vh]">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              {current.label}
            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
              {CONTENT.title}
            </h1>

            <h2 className="mt-5 max-w-4xl text-xl font-light leading-relaxed text-white/90 drop-shadow-xl md:text-3xl">
              {CONTENT.subtitle}
            </h2>

            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/85 drop-shadow-xl md:text-lg">
              {CONTENT.heroTagline}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
              {current.caption}
            </p>
          </motion.div>
        </main>

        <footer className="flex flex-col gap-6 pb-4 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-2">
            {items.map((item, dotIndex) => (
              <button
                key={item.label}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show ${item.label}`}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  dotIndex === index
                    ? "w-12 bg-white"
                    : "w-2.5 bg-white/35 hover:bg-white/60"
                )}
              />
            ))}
          </div>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-white/80 transition hover:text-white"
          >
            Scroll for FrameVR links
            <ChevronDown className="h-4 w-4 transition group-hover:translate-y-1" />
          </a>
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false, index = 0 }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={cn(
        "group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]",
        featured && "grid lg:grid-cols-[1.1fr_0.9fr]"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "min-h-[320px] lg:min-h-[420px]" : "h-56"
        )}
      >
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`${project.title} thumbnail`}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.20),_transparent_35%),linear-gradient(135deg,_#111827,_#000000_55%,_#1f2937)] p-8 text-center text-white/70">
            Add thumbnail image in public/images
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div
        className={cn(
          "p-6 md:p-7",
          featured && "flex flex-col justify-center lg:p-10"
        )}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-white/45">
          {project.eyebrow}
        </p>

        <h3
          className={cn(
            "mt-3 flex items-start justify-between gap-3 font-semibold leading-tight text-white",
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          )}
        >
          {project.title}
          <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-white/45 transition group-hover:text-white" />
        </h3>

        <p className="mt-2 text-sm text-white/50">
          Created by {project.creator}
        </p>

        <p className="mt-5 text-sm leading-7 text-white/65 md:text-base md:leading-8">
          {project.description}
        </p>

        <div className="mt-6 inline-flex w-fit rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/65 transition group-hover:border-white/35 group-hover:text-white">
          Open FrameVR
        </div>
      </div>
    </motion.a>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            About the project
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-6xl">
            What educators can take from this demo
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-white/70">
            {CONTENT.description}
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">
                AI as a critical tool
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                AI was not treated as a shortcut or replacement for
                interpretation. Students used it selectively for organization,
                3D modeling, spatial experimentation, coding support, and
                tutorial help, while still developing their own curatorial
                arguments.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">
                VR as exhibition practice
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                FrameVR made curatorial decisions visible. Students had to think
                about scale, sequence, movement, lighting, labels, and how a
                viewer encounters artworks in space.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">
                Students as exhibition makers
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                The assignment asked students to move from art historical
                analysis to exhibition design. Their projects show how AI and VR
                can support student agency when the goal is critical,
                reflective, and humanities-centered learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionNotebook() {
  const storageKey = "duke-ai-summit-asked-questions";

  const [questionText, setQuestionText] = useState("");
  const [questions, setQuestions] = useState(() => {
    try {
      const savedQuestions = window.localStorage.getItem(storageKey);
      return savedQuestions
        ? JSON.parse(savedQuestions)
        : CONTENT.starterQuestions;
    } catch {
      return CONTENT.starterQuestions;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(questions));
    } catch {
      // If browser storage is unavailable, the page will still work during the session.
    }
  }, [questions]);

  function addQuestion() {
    const trimmedQuestion = questionText.trim();

    if (!trimmedQuestion) return;

    setQuestions((currentQuestions) => [
      {
        text: trimmedQuestion,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
      ...currentQuestions,
    ]);

    setQuestionText("");
  }

  function removeQuestion(indexToRemove) {
    setQuestions((currentQuestions) =>
      currentQuestions.filter((_, index) => index !== indexToRemove)
    );
  }

  function clearQuestions() {
    const confirmed = window.confirm(
      "Clear all saved questions from this browser?"
    );

    if (confirmed) {
      setQuestions([]);
    }
  }

  return (
    <section
      id="discussion"
      className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-12"
    >
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-10">
        <div className="mb-8 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/55">
            <MessageCircle className="h-4 w-4" />
            Showcase questions
          </div>

          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Questions and conversations from the showcase
          </h2>

          <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
            Use this space to record questions visitors ask during the demo. The
            list is saved in this browser, so it can support follow-up
            reflection after the Summit.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/35 p-5 md:p-6">
            <label
              htmlFor="questionBox"
              className="text-xs uppercase tracking-[0.25em] text-white/45"
            >
              Add a question
            </label>

            <textarea
              id="questionBox"
              value={questionText}
              onChange={(event) => setQuestionText(event.target.value)}
              placeholder="Type a question someone asks at the table..."
              className="mt-4 min-h-40 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-base leading-7 text-white outline-none transition placeholder:text-white/35 focus:border-white/35 focus:bg-white/[0.09]"
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={addQuestion}
                className="rounded-full border border-white/20 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
              >
                Add Question
              </button>

              <button
                type="button"
                onClick={clearQuestions}
                className="rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white/60 transition hover:border-white/35 hover:text-white"
              >
                Clear List
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/35 p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Asked / discussed questions
              </p>

              <p className="text-xs text-white/40">{questions.length} saved</p>
            </div>

            {questions.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-white/15 p-6 text-sm leading-7 text-white/50">
                No questions saved yet. Add visitor questions during the
                showcase as they come up.
              </div>
            ) : (
              <div className="grid gap-3">
                {questions.map((question, index) => {
                  const text =
                    typeof question === "string" ? question : question.text;
                  const time =
                    typeof question === "string" ? "Starter" : question.time;

                  return (
                    <motion.div
                      key={`${text}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                          {time}
                        </p>

                        <button
                          type="button"
                          onClick={() => removeQuestion(index)}
                          className="text-xs uppercase tracking-[0.18em] text-white/35 transition hover:text-white"
                        >
                          Remove
                        </button>
                      </div>

                      <p className="text-sm leading-7 text-white/75 md:text-base">
                        {text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DukeAISummitShowcaseSite() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <KioskCarousel items={CONTENT.kioskImages} />

      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12"
      >
        <div className="mb-12 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-white/45">
            Explore the demo
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            Try the VR demo and explore how students used AI in curatorial
            practice.
          </h2>

          <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
            Each thumbnail opens a FrameVR project in a new browser tab.
            Visitors can enter the main curatorial game, compare student
            exhibitions, and discuss how AI supported different kinds of
            learning: modeling, spatial experimentation, coding support,
            tutorial guidance, and critical reflection.
          </p>
        </div>

        <ProjectCard project={CONTENT.mainProject} featured />

        <div className="mt-10">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
            Student exhibitions
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {CONTENT.studentProjects.map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <QuestionNotebook />

      <footer className="border-t border-white/10 px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              {CONTENT.presenter}
            </p>
            <p className="mt-1 text-sm text-white/55">{CONTENT.event}</p>
          </div>

          <a
            href={`mailto:${CONTENT.contactEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm text-white/75 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
          >
            <Mail className="h-4 w-4" />
            Contact presenter
          </a>
        </div>
      </footer>
    </div>
  );
}
