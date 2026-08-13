export interface TeamMember {
  name: string
  role: string
  blurb: string
  photoUrl?: string
}

export const TEAM_NAME = 'Team 45 - Client and PRM'

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Semih Eren',
    role: 'Project Manager',
    blurb:
      'Responsible for planning and coordinating the project, ensuring milestones are met and the team stays aligned on scope and priorities.',
  },
  {
    name: 'Nicholas Matthew',
    role: 'Business Analyst',
    blurb:
      'Gathers requirements, analyses the business workflow, and translates client needs into clear specifications the team can build against.',
  },
  {
    name: 'Sheran Mickayel Narasingha Mudiyanselage',
    role: 'Developer One',
    blurb:
      'Builds and maintains application features, focusing on implementation quality and turning designs into working software.',
  },
  {
    name: 'Anay Arora',
    role: 'Developer Two',
    blurb:
      'Tests application features end to end, covering edge cases, verifying behaviour against requirements and logging defects.',
  },
  {
    name: 'Sienna Saunders',
    role: 'UX Designer',
    blurb:
      'Designs the user experience and interface, producing wireframes and visual direction that keep the product clear and consistent.',
  },
]