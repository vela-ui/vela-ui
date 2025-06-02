import { IconSvgProps } from "./types"

export const CircleIcon = (
  props: IconSvgProps & {
    className?: string
  },
) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}
