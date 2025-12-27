# Project Architecture & Guidelines

## Overview
This project is a **React** web application built with **Vite**, **TypeScript**, and **Tailwind CSS**. It follows strict software engineering principles to ensure scalability, maintainability, and quality.

## Inquebrantable Laws

### 1. Compliance
- This file (`ARCHITECTURE.md`) defines the **inquebrantable laws** of the project.
- Any deviation from these rules is strictly prohibited.
- If new patterns or technologies are introduced, this file MUST be updated.

### 2. Design Patterns & Principles
- **SOLID Principles**: All code must adhere to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles.
- **Clean Architecture**:
  - **Presentation Layer**: React Components (`src/components`).
  - **Domain/Data Layer**: Data definitions and interfaces (`src/data`, `src/types`).
  - **Infrastructure/Services**: External integrations (e.g., Firebase, API calls).
- **Clean Code**:
  - Variable and function names must be self-explanatory.
  - Functions should be small and do one thing.
  - Avoid redundancy (DRY).

### 3. Test-Driven Development (TDD)
- **Rule**: Tests MUST be written *before* implementation.
- **Coverage**:
  - **Success Cases**: Expected behavior.
  - **Failure Cases**: Invalid inputs, error states.
  - **Security Cases**: Injection attempts, unauthorized access boundaries.
- **Status**: Code is not complete until all tests pass.

### 4. Technology Stack
- **Frontend**: React (v18+), TypeScript, Vite, Tailwind CSS.
- **State Management**: React Context API (`src/contexts`).
- **Icons**: Lucide React.
- **Backend/Cloud**: Firebase (Hosting, etc.).
- **Package Manager**: npm.

## Directory Structure
```
src/
├── assets/         # Static assets (images, fonts)
├── components/     # UI Components (Presentational)
├── contexts/       # Global state (React Context)
├── data/           # Static data and constants
├── types/          # TypeScript interfaces/types (To be created)
├── utils/          # Helper functions (To be created)
└── App.tsx         # Root component
```

## Workflow
1.  **Version Control**: Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`).
2.  **Code Review**: All code is subject to "AI Audit" for vulnerabilities and inefficiencies.
3.  **Documentation**: `README.md` must be kept up-to-date with `ARCHITECTURE.md`.

## Testing Strategy
- **Unit Tests**: Vitest + React Testing Library.
- **Integration Tests**: Test interaction between components.
