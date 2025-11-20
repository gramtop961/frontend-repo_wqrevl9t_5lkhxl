import { useEffect, useState } from 'react'
import { User } from 'lucide-react'

export default function UserMenu() {
  const [auth, setAuth] = useState(null)
  useEffect(() => {
    const saved = localStorage.getItem('auth')
    if (saved) setAuth(JSON.parse(saved))
  }, [])

  if (!auth) {
    return (
      <a href="/auth" className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-100 hover:bg-white/5 transition text-sm">Sign in</a>
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm text-slate-200/90">
      <User size={18} className="text-blue-300" />
      <span className="hidden sm:inline">{auth.user?.name || auth.user?.email}</span>
      <button onClick={() => {localStorage.removeItem('auth'); window.location.reload()}} className="ml-2 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700">Log out</button>
    </div>
  )
}
