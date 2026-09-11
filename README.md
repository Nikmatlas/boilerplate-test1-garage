# Food Systems Collective — Client & Partner Relationship Management System

> A web-based Client & Partner Relationship Management (CRM) system developed for the Food Systems Collective (FSC).

The system is designed to help FSC manage its relationships with clients and partners in one centralised platform. It provides a structured way to manage contacts, organisations, communications, proposals, activities, and relationship information.

## Project Overview

The FSC CRM is being developed as a team project to support the Client & Partner Relationship Management needs of the Food Systems Collective.

The system aims to:

- Centralise client and partner information
- Make relationship information easier to access and manage
- Track interactions and communications
- Support client and partner relationship management
- Improve visibility of ongoing activities and proposals
- Reduce reliance on disconnected spreadsheets and manual processes
- Provide a foundation for future CRM functionality

## Tech Stack

| | |
|-|-|
| **Frontend** | Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS |
| **Backend** | Firebase Cloud Functions v2 · Express |
| **Database** | Firebase Firestore |
| **Authentication** | Firebase Authentication |
| **Package Manager** | pnpm workspaces |
| **Testing** | Vitest · Testing Library · Supertest |
| **Code Quality** | ESLint · Prettier · Lefthook |
| **CI/CD** | GitHub Actions |
| **Deployment** | Vercel |

## Project Structure

```text
/
├── frontend/
│   └── src/
│       ├── app/             # Application pages and routes
│       ├── components/      # Reusable UI components
│       ├── features/        # Feature-specific modules
│       ├── lib/             # Firebase, utilities and shared logic
│       ├── hooks/           # Custom React hooks
│       ├── providers/       # React context providers
│       ├── actions/         # Next.js Server Actions
│       └── types/           # TypeScript type definitions
│
├── backend/
│   └── src/
│       ├── app.ts           # Express application
│       ├── routes/           # API routes
│       ├── middleware/       # Authentication and error handling
│       └── lib/              # Firebase and backend utilities
│
├── firebase/
│   ├── firestore.rules       # Firestore security rules
│   └── firestore.indexes.json
│
├── docs/                     # Project documentation
│
└── .github/                  # GitHub Actions and repository configuration
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js 22**
- **pnpm 10+**
- Access to the project's Firebase environment

Check your versions:

```bash
node --version
pnpm --version
```

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd fsc-crm
```

Install dependencies:

```bash
pnpm install
```

### Environment Setup

The application uses Firebase for authentication, database functionality and backend services.

Environment variables should be configured according to the project's environment configuration.

Do **not** commit:

- `.env`
- `.env.local`
- Firebase service account credentials
- API keys
- Private keys
- Other secrets

For the required environment variables, refer to:

```text
docs/ENV-VARS.md
```

### Run the Development Server

From the repository root:

```bash
pnpm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## Available Commands

Run commands from the repository root.

```bash
pnpm run dev              # Start the frontend development server
pnpm run build            # Build the frontend and backend
pnpm run test             # Run backend tests
pnpm run test:component   # Run frontend tests
pnpm run test:all         # Run all tests
pnpm run lint             # Run ESLint
pnpm run format           # Format the project with Prettier
pnpm run typecheck        # Run TypeScript checks
pnpm run validate         # Check for unreplaced placeholders
```

## Testing

The project uses:

- **Vitest** for unit testing
- **Testing Library** for frontend component testing
- **Supertest** for backend/API testing

Run backend tests:

```bash
pnpm run test
```

Run frontend tests:

```bash
pnpm run test:component
```

Run all tests:

```bash
pnpm run test:all
```

Before submitting a pull request, make sure the relevant tests pass.

## Security

Security is an important part of the project.

The application uses several security mechanisms, including:

- Firebase Authentication
- Server-side authentication checks
- Session cookies
- Firestore security rules
- Zod input validation
- HTTP security headers
- CORS configuration
- Rate limiting
- Dependency vulnerability scanning
- GitHub Actions CI checks

Run the dependency security audit with:

```bash
pnpm audit
```

The repository should have **no known vulnerabilities** before changes are merged.

## Git Workflow

The project uses feature branches and pull requests.

| Branch | Purpose |
|---|---|
| `main` | Stable project branch |
| `feature/*` | New functionality |
| `fix/*` | Bug fixes |
| `hotfix/*` | Urgent fixes |

### Creating a Feature Branch

Start from the latest `main`:

```bash
git checkout main
git pull origin main
```

Create a feature branch:

```bash
git checkout -b feature/<feature-name>
```

Example:

```bash
git checkout -b feature/client-management
```

### Commit Messages

This repository uses **Conventional Commits**.

Examples:

```bash
git commit -m "feat: add client management"
git commit -m "fix: resolve authentication redirect"
git commit -m "test: add client route tests"
git commit -m "docs: update project setup instructions"
git commit -m "chore: update dependencies"
```

Pull requests should be opened against `main`.

## Pull Requests

Before creating a pull request:

1. Make sure your branch is up to date.
2. Run the relevant tests.
3. Run the build.
4. Run the security audit.
5. Make sure there are no unnecessary changes.
6. Push your branch.
7. Create a pull request against `main`.

Recommended checks:

```bash
pnpm test
pnpm test:component
pnpm run build
pnpm audit
```

### Security Checks and Pull Requests

Pull requests may be blocked if the repository security checks detect high or critical dependency vulnerabilities.

If this happens, check:

```bash
pnpm audit
```

Address the reported vulnerability before attempting to merge the pull request again.

## Team Roles

The project is being developed by a team working across different areas of the system.

| Role | Responsibility |
|---|---|
| **Project Management** | Planning, coordination and project tracking |
| **Business Analysis** | Requirements, business processes and stakeholder needs |
| **Development** | Frontend, backend and database implementation |
| **UX/UI** | User experience, interface design and usability |
| **Testing** | Test planning, execution and defect reporting |

See the project's requirements and documentation for the current team members and responsibilities.

## Documentation

Project documentation is maintained in the `docs/` directory.

Important documentation includes:

| Document | Description |
|---|---|
| `docs/ARCHITECTURE.md` | System architecture and technical design |
| `docs/ENV-VARS.md` | Environment variable configuration |
| `docs/TESTING.md` | Testing approach and test conventions |
| `docs/SECURITY.md` | Security practices |
| `docs/GIT-WORKFLOW.md` | Git and branch workflow |
| `docs/CI-CD.md` | Continuous integration and deployment |

Additional project documentation should be added to `docs/` as the system develops.

## Deployment

The frontend is deployed using **Vercel**.

The backend uses **Firebase Cloud Functions**.

Deployment configuration should be maintained separately from local development configuration, and production credentials must never be committed to the repository.

## Project Status

The system is currently under active development.

Features and functionality will be added progressively according to the project's requirements, backlog and development plan.

## Team

**Food Systems Collective CRM Team**

This repository contains the team's implementation of the Client & Partner Relationship Management System for the Food Systems Collective.

---

**Project:** Food Systems Collective — Client & Partner Relationship Management System
**Repository:** FSC CRM
