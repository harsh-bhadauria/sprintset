# Sprintset

> **Stop scrolling the sheet. Start the clock.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-harsh--bhadauria.github.io%2Fsprintset-f97316?style=for-the-badge&logo=googlechrome&logoColor=white)](https://harsh-bhadauria.github.io/sprintset)
[![React 19](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## Overview

Staring at a 450-question sheet and deciding "what should I do today" is its own kind of procrastination. Sprintset removes the decision: pick a preset, get a queue, watch the clock. You show up, you solve, you're done. No scrolling, no "let me just pick an easy one first," no vague afternoon that quietly becomes zero problems solved.

It's a personal tool I built because I genuinely could not deal with open-ended goals. Turns out giving yourself a contest instead of a to-do list works.

## Features

- **Difficulty-weighted sprint engine**: Speedy, Steady, Balanced, Grind, Gauntlet, or a fully custom quota. Every preset is a fixed, honest contract: you know exactly what you're getting into before you start the clock. If a sheet can't fulfill a preset's quota (looking at you, SQL 50 and your one Hard question), the preset adapts transparently: marked with an asterisk, never silently swapped.

- **Sheet-first question bank**: Bring your own CSV, organize by sheet (Blind 75, LeetCode SQL 50, whatever you're grinding), and sprint scoped to exactly one sheet at a time. Questions can live in multiple sheets at once without duplicating your progress on them.

- **Confidence that infers itself**: Solved fast on the first try? Solid. Took a few attempts and a while? Shaky. Sprintset tags it automatically from your attempt count and solve time, and quietly resurfaces your shaky or gave-up questions in future sprints with zero manual spaced-repetition bookkeeping required.

- **Veto integration**: Sprint points convert into screen time via Veto, so each completed sprint can directly unlock earned usage time.

- **Client-first design**: Runs 100% locally in your browser out of the box. No accounts required. Your data lives in your browser and CSVs you control. Export or import whenever.

- **Light and dark, several accents**: Because staring at the same palette for six hours straight does something to a person.

## Local Development

```bash
# Clone it
git clone https://github.com/harsh-bhadauria/sprintset.git
cd sprintset

# Install
npm install

# Run dev server (with local network access, for the phone-as-timer setup)
npm run dev:host
```

## Credits

Question names, topics, and difficulty tags for the included sheets are pulled from publicly available curated lists (Striver's A2Z, Blind 75, LeetCode SQL 50). Full credit to the original curators for the actual work of putting these lists together. Sprintset just gives you a clock and a reason to stop deliberating.

<h1></h1>
~ Made with ♥️ by Harsh
