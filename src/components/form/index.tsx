import React from 'react'

interface FormProps {
  children?: React.ReactNode
}

function Form({ children }: FormProps) {
  const submit = () => {}

  return <form onSubmit={submit}>{children}</form>
}

export default React.memo(Form)
