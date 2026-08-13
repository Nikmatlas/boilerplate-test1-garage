# Requirements: Team Page + Login Page Styling

**Card:** [BOOTSTRAP RESTYLING] – Write requirements for team page + login styling
**Author (BA):** Nicholas
**Status:** Draft — pending review from PM and UX
**Repo:** boilerplate-test1-garage

---

## 1. Scope

This document defines requirements for two screens built on the shared boilerplate:

1. **Login page** — styling only. No new auth logic, no new fields, no backend changes.
2. **Team page** — new page shown after successful login. Displays team name and each member's photo, name, and role, with a short blurb per person.

---

## 2. Login Page — Scope Statement

**Login scope is explicitly styling-only.**

- Reuses the existing login functionality already provided by the boilerplate (Firebase auth, existing fields, existing validation logic).
- In scope: visual restyling — layout, colors, typography, spacing, button/input styling, responsive behavior, loading/error state *appearance*.
- Out of scope: adding/removing form fields, changing validation rules, changing auth flow or providers, changing redirect/session logic.
- On successful login → redirect to the Team Page (this routing behavior may need a small dev change if it doesn't already exist; flagged as a dependency below, not a styling task).

---

## 3. Team Page — Fields, Validation & Display Rules

### 3.1 Page-level fields

| Field | Required | Validation / Rule |
|---|---|---|
| Team name | Yes | Plain text, max 60 characters. Displayed once at top of page. |

### 3.2 Per-member fields (repeated for each team member)

| Field | Required | Validation / Rule | Display Rule |
|---|---|---|---|
| Photo | No (has fallback) | Accepts standard image formats (jpg/png). If missing, show a placeholder avatar (initials or generic icon). | Fixed-size thumbnail, consistent aspect ratio (e.g. square, cropped) across all cards. |
| Name | Yes | Plain text, max 40 characters. | Bold, larger font than role/blurb. |
| Role | Yes | Must be one of the agreed team roles (PM, BA, UX, Dev 1, Dev 2) — or combined if roles overlap. | Shown directly under name, smaller/lighter font. |
| Blurb | Yes | Free text, recommend max ~150 characters ("short blurb" per brief). | Shown below role, truncated with ellipsis if it exceeds the card's display area — no dynamic expansion needed for v1. |

### 3.3 Layout rule

- All member cards use the same template/structure (photo, name, role, blurb) — no per-person custom layouts.
- Cards displayed in a grid or row, consistent spacing, responsive down to mobile width.

---

## 4. Edge Cases

| Case | Expected Behavior |
|---|---|
| Member has no photo uploaded | Show fallback avatar/initials — page must not break or show a broken image icon. |
| Blurb text is too long | Truncate visually (e.g. ellipsis); do not let it break the card layout or push other cards out of alignment. |
| Team has fewer than 5 members (combined roles) | Page still renders correctly with fewer cards — layout should not assume exactly 5. |
| Name or role field is unexpectedly empty | Should not happen given validation, but page should not crash — show blank space rather than an error. |
| Very long team name | Truncate or wrap gracefully rather than overflowing the header. |
| Login fails (wrong credentials) | Existing error-state behavior from boilerplate is kept as-is — only the *visual styling* of the error message changes, not the logic or message content. |
| Page viewed on narrow screen (mobile) | Cards stack vertically; text remains readable, no horizontal scroll. |

---

## 5. Dependencies / Notes for Dev

- If there's no existing route from login → team page, that's a small dev task (not styling) — flagging here rather than assuming it's already covered.
- Actual member data (names, roles, blurbs, photos) needs to be collected from the team separately — not part of this requirements doc.

---

## 6. Sign-off

- [x] Reviewed by PM
- [x] Reviewed by UX
- [ ] Shared in team channel / linked on Planner card
