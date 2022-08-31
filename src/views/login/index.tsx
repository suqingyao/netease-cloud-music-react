import { LoginParams } from '@/service/types/login-params'
import { useAppDispatch } from '@/store'
import { loginUser } from '@/store/slice/authSlice'
import React, { FormEvent, useState } from 'react'
import { Form, LoginBtn, LoginWrapper } from './style'

function Login() {
  const [form, setForm] = useState<LoginParams>({
    phone: '',
    password: ''
  })

  const dispatch = useAppDispatch()

  const login = (e: FormEvent) => {
    e.preventDefault()
    console.log('🚀 ~ file: index.tsx ~ line 10 ~ Login ~ form', form)
    dispatch(loginUser(form))
  }

  return (
    <LoginWrapper>
      <Form className="form" onSubmit={login}>
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
        <LoginBtn type="submit" className="login-btn">
          Login
        </LoginBtn>
      </Form>
    </LoginWrapper>
  )
}

export default Login
