export default {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    "base-100": "var(--fallback-base-100,oklch(var(--color-base-100)/<alpha-value>))",
    "base-200": "var(--fallback-base-200,oklch(var(--color-base-200)/<alpha-value>))",
    "base-300": "var(--fallback-base-300,oklch(var(--color-base-300)/<alpha-value>))",
    "base-content": "var(--fallback-base-content,oklch(var(--color-base-content)/<alpha-value>))",
    primary: "var(--fallback-primary,oklch(var(--color-primary)/<alpha-value>))",
    "primary-content":
      "var(--fallback-primary-content,oklch(var(--color-primary-content)/<alpha-value>))",
    secondary: "var(--fallback-secondary,oklch(var(--color-secondary)/<alpha-value>))",
    "secondary-content":
      "var(--fallback-secondary-content,oklch(var(--color-secondary-content)/<alpha-value>))",
    accent: "var(--fallback-accent,oklch(var(--color-accent)/<alpha-value>))",
    "accent-content":
      "var(--fallback-accent-content,oklch(var(--color-accent-content)/<alpha-value>))",
    neutral: "var(--fallback-neutral,oklch(var(--color-neutral)/<alpha-value>))",
    "neutral-content":
      "var(--fallback-neutral-content,oklch(var(--color-neutral-content)/<alpha-value>))",
    info: "var(--fallback-info,oklch(var(--color-info)/<alpha-value>))",
    "info-content": "var(--fallback-info-content,oklch(var(--color-info-content)/<alpha-value>))",
    success: "var(--fallback-success,oklch(var(--color-success)/<alpha-value>))",
    "success-content":
      "var(--fallback-success-content,oklch(var(--color-success-content)/<alpha-value>))",
    warning: "var(--fallback-warning,oklch(var(--color-warning)/<alpha-value>))",
    "warning-content":
      "var(--fallback-warning-content,oklch(var(--color-warning-content)/<alpha-value>))",
    error: "var(--fallback-error,oklch(var(--color-error)/<alpha-value>))",
    "error-content":
      "var(--fallback-error-content,oklch(var(--color-error-content)/<alpha-value>))",
  },
  borderRadius: {
    selector: "var(--radius-selector)",
    field: "var(--radius-field)",
    box: "var(--radius-box)",
  },
}
