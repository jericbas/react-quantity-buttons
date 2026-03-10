# React Quantity Buttons

> A React component for quantity stepper buttons with increment/decrement controls.

---

## 📝 About This Project

> ✨ **Modernizing this as part of learning** — It's been 7 years since I last updated this repo, so I'm bringing it up to modern standards. This roadmap is my guide to upgrading the build tooling (Vite + Bun), converting to TypeScript + functional components, and publishing a proper package.
>
> 🗓️ **Started:** March 2026

---

## 📋 TODO / Modernization Roadmap

> Here is a step-by-step ordered to-do list to modernize and publish the updated package, structured from initial setup to final release:

### 🔧 Phase 1: Project Setup & Tooling
- [ ] Switch package manager from Yarn/npm to **Bun** 🥟
- [ ] Initialize **Vite** in Library Mode to replace the existing build setup.
- [ ] Install and configure TypeScript (`tsconfig.json`) to allow writing the component with strict type safety.
- [ ] Set up ESLint and Prettier to enforce consistent code formatting.
- [ ] (Optional) Add Husky and lint-staged to run formatting and linting automatically before every commit.

### ♻️ Phase 2: Code Refactoring
- [ ] Convert the QuantityButton component from a Class Component to a Functional Component using Hooks (useState, useEffect, useCallback).
- [ ] Define TypeScript interfaces (type or interface) for the component props (e.g., value, min, max, step, onChange, className).
- [ ] Implement a controlled vs. uncontrolled state pattern so the component can manage its own state or be controlled by a parent component.
- [ ] Add accessibility (a11y) improvements, such as aria-label on buttons and role="spinbutton" on the input.
- [ ] Improve input validation to prevent users from typing non-numeric characters and handle on-blur events to snap the value back to the nearest valid min or max.

### 🧪 Phase 3: Testing
- [ ] Install Jest and React Testing Library.
- [ ] Write unit tests for basic rendering.
- [ ] Write interaction tests (clicking increment/decrement buttons updates the value).
- [ ] Write edge-case tests (ensuring the value never exceeds max or drops below min, and handles manual typing correctly).

### 📦 Phase 4: Package Configuration (package.json)
- [ ] Move react and react-dom from dependencies to peerDependencies to prevent duplicate React instances for users.
- [ ] Update the main, module, and types fields to point to the newly bundled CommonJS, ESM, and TypeScript declaration files.
- [ ] Ensure the files array only includes the compiled output folder (e.g., dist/) so unnecessary files aren't published to NPM.

### 📝 Phase 5: Documentation (README.md)
- [ ] Add a visual element at the top (a GIF or screenshot of the component).
- [ ] Add NPM status badges (version, downloads, bundle size, license).
- [ ] Write clear installation instructions for npm, yarn, and pnpm.
- [ ] Provide a minimal, copy-pasteable React code example demonstrating basic usage.
- [ ] Create a Markdown table detailing the API/Props (Prop Name, Type, Default, Description).
- [ ] Add a link to a live interactive demo (like CodeSandbox or StackBlitz).

### 🚀 Phase 6: Automation & Release
- [ ] Create a GitHub Actions workflow (`.github/workflows/main.yml`) to automatically run linting and tests on every push or pull request.
- [ ] Run the local build command to ensure the dist/ folder compiles without errors.
- [ ] Bump the version number in package.json (following Semantic Versioning).
- [ ] Run npm publish to release the updated package to the NPM registry.

---

### Installation

`yarn` or `npm install`

### Storybook

```bash
yarn styleguide
# or
npm run styleguide
```
