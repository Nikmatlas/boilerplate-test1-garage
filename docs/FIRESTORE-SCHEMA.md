# Firestore Schema

Food Systems Collective, Web-Based CRM Prototype, Team A, Project 45


## `organisations` collection

**Path:** `/organisations/{orgId}`
**Access:** Coordinators and Administrators can read all; writes go through the Express API, which checks the caller's role before writing.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | Yes | Organisation name |
| `category` | `string` | Yes | Category tag used for grouping and filtering |
| `tags` | `string[]` | No | Free-form tags |
| `pipelineStage` | `'Prospect' \| 'Research' \| 'Qualified' \| 'Outreach' \| 'Follow-up' \| 'Meeting' \| 'Proposal' \| 'Negotiation' \| 'Partnership' \| 'Active Relationship' \| 'Completed' \| 'Archived'` | Yes | Current stage in the 12-stage relationship pipeline |
| `ownerId` | `string` | Yes | References a document in `users` |
| `leadScore` | `number` | No | Qualification score; replaces the spreadsheet's free-text Potential/Reason columns |
| `nextFollowUpDate` | `Timestamp \| null` | No | Date the next follow-up is due |
| `createdAt` | `Timestamp` | Yes | When the document was created |
| `updatedAt` | `Timestamp` | Yes | When the document was last updated |
| `_schemaVersion` | `1` | Yes | Schema version for lazy migration |

**Creation:** Created through the Express API when a Coordinator adds a new organisation.
**Deletion:** Hard-delete is disabled in security rules. Use `pipelineStage: 'Archived'` instead.

---

## `contacts` collection

**Path:** `/contacts/{contactId}`
**Access:** Coordinators and Administrators can read all; writes go through the Express API.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orgId` | `string` | Yes | References a document in `organisations` |
| `name` | `string` | Yes | Contact's full name |
| `role` | `string` | No | Contact's role or position at the organisation |
| `email` | `string \| null` | No | |
| `phone` | `string \| null` | No | |
| `isPrimary` | `boolean` | Yes | Whether this is the organisation's primary contact |
| `createdAt` | `Timestamp` | Yes | When the document was created |
| `updatedAt` | `Timestamp` | Yes | When the document was last updated |
| `_schemaVersion` | `1` | Yes | Schema version for lazy migration |

**Creation:** Created through the Express API when a Coordinator adds a stakeholder to an organisation.
**Deletion:** Hard-delete is disabled in security rules. Contacts are not soft-deleted individually; they are removed when their parent organisation is archived.

---

## `activities` collection

**Path:** `/activities/{activityId}`
**Access:** Coordinators and Administrators can read all; writes go through the Express API.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orgId` | `string` | Yes | References a document in `organisations` |
| `type` | `'email' \| 'call' \| 'meeting' \| 'other'` | Yes | Activity type |
| `date` | `Timestamp` | Yes | When the activity occurred |
| `notes` | `string` | No | Free-text notes |
| `outcome` | `string \| null` | No | Result of the activity |
| `actionItems` | `string[]` | No | Follow-up actions raised by the activity |
| `createdAt` | `Timestamp` | Yes | When the document was created |
| `_schemaVersion` | `1` | Yes | Schema version for lazy migration |

**Creation:** Created through the Express API when a Coordinator logs a meeting, call, or other touchpoint.
**Deletion:** Hard-delete is disabled in security rules. Activities are an append-only history and are not edited or removed once created.

---

## `opportunities` collection

**Path:** `/opportunities/{opportunityId}`
**Access:** Coordinators and Administrators can read all; writes go through the Express API.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orgId` | `string` | Yes | References a document in `organisations` |
| `name` | `string` | Yes | Opportunity or proposal name |
| `type` | `string` | No | Opportunity type, e.g. partnership, sponsorship |
| `status` | `string` | Yes | Current status, e.g. open, won, lost |
| `stage` | `string` | Yes | Stage within the opportunity's own progression |
| `ownerId` | `string` | Yes | References a document in `users` |
| `relatedContactIds` | `string[]` | No | Each references a document in `contacts` |
| `nextStep` | `string \| null` | No | The next action required to move this opportunity forward |
| `createdAt` | `Timestamp` | Yes | When the document was created |
| `updatedAt` | `Timestamp` | Yes | When the document was last updated |
| `_schemaVersion` | `1` | Yes | Schema version for lazy migration |

**Creation:** Created through the Express API when a Coordinator opens a proposal or partnership opportunity.
**Deletion:** Hard-delete is disabled in security rules. Use `status: 'closed'` instead.

---

## `users` collection

**Path:** `/users/{userId}`
**Access:** Owner-only (user can read their own document; Administrators can read all)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `uid` | `string` | Yes | Firebase Auth UID (same as document ID) |
| `name` | `string` | Yes | Display name |
| `email` | `string` | Yes | User's email address |
| `role` | `'Coordinator' \| 'Administrator'` | Yes | User role — immutable by the user after creation |
| `createdAt` | `Timestamp` | Yes | When the document was created |
| `updatedAt` | `Timestamp` | Yes | When the document was last updated |
| `_schemaVersion` | `1` | Yes | Schema version for lazy migration |

**Creation:** Auto-created on first sign-in via Firebase Auth.
**Deletion:** Hard-delete is disabled in security rules. Use a `disabled` flag instead.

---

<!-- Add new collection schemas below using the /firebase-collection skill -->
