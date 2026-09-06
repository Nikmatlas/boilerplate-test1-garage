# Initial CRM Database

Food Systems Collective, Web-Based CRM Prototype, Team A, Project 45

## Overview

The database is Cloud Firestore. It is structured around five collections, replacing the Master Sales Pipeline spreadsheet's single flat row per lead with separate records for an organisation, its contacts, its activities, and its opportunities.

## Collections

Organisations is the top-level collection. Contacts, activities, and opportunities each reference their parent organisation by its identifier, rather than being nested inside it, so each can also be queried on its own.

| Collection | Key fields | Module |
|---|---|---|
| organisations | name, category, tags, pipelineStage, ownerId, leadScore, nextFollowUpDate | Organisations and Stakeholders, Pipeline |
| contacts | orgId, name, role, email, phone, isPrimary | Organisations and Stakeholders |
| activities | orgId, type, date, notes, outcome, actionItems | Meetings and Activities |
| opportunities | orgId, name, type, status, stage, ownerId, relatedContactIds, nextStep | Partnerships and Opportunities |
| users | name, role, email | Referenced by ownerId fields |

Field-level detail for each collection is in the Firestore Schema document.

## Notes on the design

The pipelineStage field on organisations replaces the spreadsheet's Active or Inactive status with the full twelve-stage pipeline, from Prospect to Archived.

Lead score and qualification, previously the free-text Potential and Reason columns in the spreadsheet, now sit on the organisation record as structured fields, since they describe the organisation's current state rather than a history of past values.

The dashboard and pipeline board are not separate collections. Both are read layers over the five collections above, built from filters and counts rather than their own stored data.
