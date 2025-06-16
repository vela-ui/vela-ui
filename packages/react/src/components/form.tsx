"use client"

import type { FormProps as AriaFormProps } from "react-aria-components"
import { Form as AriaForm } from "react-aria-components"

interface FormProps extends AriaFormProps {
  ref?: React.RefObject<HTMLFormElement>
}

function Form({ ref, ...props }: FormProps) {
  return <AriaForm ref={ref} {...props} />
}

export { Form }
export type { FormProps }
