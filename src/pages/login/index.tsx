import { LoginParams } from '@/api/types/login-params'
import { useAppDispatch } from '@/store'
import { loginUser } from '@/store/slice/auth'
import { FormEvent, useState } from 'react'

function Login() {
  const [form, setForm] = useState<LoginParams>({
    phone: '',
    password: ''
  })

  const dispatch = useAppDispatch()

  const login = (e: FormEvent) => {
    e.preventDefault()
    dispatch(loginUser(form))
  }

  return (
    <div>
      <div className="form" onSubmit={login}>
        <input
          type="text"
          value={form?.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />
        <input
          type="password"
          value={form?.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </div>
    </div>
  )
}

export default Login
