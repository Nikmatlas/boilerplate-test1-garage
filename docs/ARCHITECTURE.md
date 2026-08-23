# Architecture

Food Systems Collective, Web-Based CRM Prototype, Team A, Project 45

## System Overview

The system consists of a React frontend, served as a static site from Firebase Hosting, and an Express API deployed as a single Cloud Function under Firebase Functions v2, which requires the Blaze plan. Firebase Auth and Firestore handle authentication and data storage. All components run within a single Firebase project, giving the system one unified delivery workflow.
 
The system supports two data paths. The first is a direct connection from the browser to Firestore through the client SDK, with access controlled by Firestore security rules. The second is a connection from the browser to the Express API, authenticated with a bearer token and validated by the API's authentication middleware.
 
A user authenticates through Firebase Auth in the browser and receives an ID token. This token accompanies direct Firestore requests as authentication context, and is attached as a bearer header for requests to the Express API. The system does not maintain a server-side session or cookie. Every write operation is verified either by Firestore security rules or by the API's token check, so no operation depends on trust placed in the client alone.
 
## Database approach selected
 
The database is Cloud Firestore. This choice was confirmed because it fits the existing Firebase project, requires no separate database server, and matches the shape of the data described in the six CRM modules.
 
The Firestore database contains five collections. Organisations form the top-level entity. Contacts, activities, and opportunities each reference an organisation by its identifier.
 
Lead score and qualification data are stored on the organisation record itself rather than in a separate collection, as these values represent the organisation's current state rather than a historical record. The relationship pipeline, consisting of twelve stages from Prospect to Archived, is represented by the pipelineStage field on the organisation record.
 
## Infrastructure requirements identified
 
A Firebase project has been created with Hosting, Firestore, Authentication, and Cloud Functions enabled. Hosting must be reachable at a live URL, and a placeholder route must return a successful response, confirming the deployment path from repository to build to live site.
 
Firestore security rules are set to a locked-down default until proper rules are written once authentication roles are confirmed. Local development steps, including Firebase CLI login and the deploy command, are documented in the repository readme.
 
