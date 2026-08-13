import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 lg:grid lg:grid-cols-2">
      {/* Left panel — hidden on mobile */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-6 bg-zinc-900 p-12">
        <div className="aspect-square w-full max-w-xs rounded-lg bg-gradient-to-br from-zinc-700 to-zinc-800" />
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-semibold text-white">Welcome, Guest</h2>
          <p className="text-sm text-zinc-400">Sign in to continue to your dashboard</p>
        </div>
      </div>

      {/* Right panel — the form */}
      <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:min-h-0">
        <div className="mx-auto w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}