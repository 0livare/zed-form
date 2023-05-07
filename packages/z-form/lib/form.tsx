import React from 'react'
import {useCreateForm} from './use-create-form'
import {FormContext} from './context'

export type FormProps = React.ComponentProps<'form'> & {
  form: ReturnType<typeof useCreateForm>
}

export function Form(props: FormProps) {
  const {form, children, ...rest} = props
  return (
    <form {...rest} onChange={form.handleChange} onBlur={form.handleBlur}>
      <FormContext.Provider value={form}>{children}</FormContext.Provider>
    </form>
  )
}