import React from 'react'

interface FormProps {
  children?: React.ReactNode
}

function Form({ children }: FormProps) {
  const submit = () => {}

  function validate() {}

  return <form onSubmit={submit}>{children}</form>
}

export default Form
