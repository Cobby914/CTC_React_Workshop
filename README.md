# Chakra UI React Components Practice

This repo contains simple examples of using **Chakra UI** with **React** and a practice assignment.

The goal:
Help students get comfortable building **stateless React components** using **Chakra UI** (no React hooks required).

## 🚀 Getting Started

```bash
yarn install
yarn dev
```

## 🧩 Practice Assignment

Create a `StudentPage.jsx` (already stubbed) and build a custom page using:
- Stateless React components
- Chakra UI components (`Box`, `Flex`, `Stack`, `Heading`, `Text`, `Button`, etc.)
- Props for customization
- Arrays + `.map()` for repeated UI

🔒 **Do NOT use any React hooks** (`useState`, `useEffect`, etc.).

👉 There is a `solution` branch with one possible implementation of `StudentPage.jsx`.


## Sample Page

A non-imported example page is available at `src/components/SampleStudentPage.jsx` for instructors.

## Intro Page Skeleton and Samples

The Introductory Page assignment is wired through `StudentPage.jsx`, which uses:
- `HeaderSection.jsx`
- `SkillsSection.jsx`
- `InterestsSection.jsx`
- `HighlightSection.jsx`

These files contain skeleton components with TODO comments for students.

Completed example versions are available as:
- `HeaderSectionSample.jsx`
- `SkillsSectionSample.jsx`
- `InterestsSectionSample.jsx`
- `HighlightSectionSample.jsx`
- `SampleIntroPage.jsx`

These sample files are **not imported** into the app by default and can be used
by instructors as reference or to demonstrate a finished solution.
