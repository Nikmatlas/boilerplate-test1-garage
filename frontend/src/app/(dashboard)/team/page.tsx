import type { Metadata } from 'next'
import { requireAuth } from '@/actions/auth.actions'
import { TEAM_NAME, TEAM_MEMBERS, type TeamMember } from '@/lib/team-data'

export const metadata: Metadata = { title: 'The Team' }

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const second = parts[1]?.[0] ?? ''
  return (first + second).toUpperCase()
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <li className="flex items-start gap-4 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-sm font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
        {member.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span aria-hidden="true">{initials(member.name)}</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-semibold">{member.name}</h3>
        <p className="text-sm text-zinc-500">{member.role}</p>
        <p className="mt-1 line-clamp-3 text-sm text-zinc-500">{member.blurb}</p>
      </div>
    </li>
  )
}

export default async function TeamPage() {
  await requireAuth()

  return (
    <div className="space-y-6">
      <h1 className="truncate text-2xl font-bold tracking-tight">
        Meet {TEAM_NAME}
      </h1>

      <ul className="space-y-3">
        {TEAM_MEMBERS.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </ul>
    </div>
  )
}