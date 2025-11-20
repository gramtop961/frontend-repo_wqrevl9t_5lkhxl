import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem('auth')
    if (saved) navigate('/')
  }, [navigate])

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const endpoint = mode === 'login' ? '/auth/login' : '/auth/signup'
      const payload = mode === 'login' 
        ? { email: form.email, password: form.password } 
        : { name: form.name, email: form.email, password: form.password }

      const res = await fetch(baseUrl + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.detail || 'Something went wrong')
      }

      localStorage.setItem('auth', JSON.stringify(data))
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex gap-2 mb-6">
          <button onClick={() => setMode('login')} className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${mode==='login' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>Log in</button>
          <button onClick={() => setMode('signup')} className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${mode==='signup' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>Sign up</button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-sm text-slate-300 mb-1">Full name</label>
              <input type="text" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your name" />
            </div>
          )}
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input type="email" required value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Password</label>
            <input type="password" required minLength={6} value={form.password} onChange={(e)=>setForm({...form, password:e.target.value})} className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="••••••••" />
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button type="submit" disabled={loading} className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow hover:shadow-lg transition disabled:opacity-60">
            {loading ? (mode==='login'?'Logging in...':'Creating account...') : (mode==='login'?'Log in':'Create account')}
          </button>
          <button type="button" onClick={()=>navigate('/')} className="w-full px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition">Back to home</button>
        </form>
      </div>
    </div>
  )
}
