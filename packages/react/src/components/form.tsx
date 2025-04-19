"use client"

import type { FormProps } from "react-aria-components"
import { Form as AriaForm } from "react-aria-components"

const Form = (props: FormProps) => {
  return <AriaForm {...props} />
}

export { Form }
export type { FormProps }
