"use client"

import React from "react"
import type {
  SliderProps as AriaSliderProps,
  SliderOutputProps,
  SliderThumbProps,
  SliderTrackProps,
} from "react-aria-components"
import {
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
  composeRenderProps,
  SliderStateContext,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { cn } from "../lib/utils"
import { DataTheme } from "./types"

const sliderVariants = tv({
  base: "slider",
  variants: {
    orientation: {
      horizontal: "slider-horizontal",
      vertical: "slider-vertical",
    },
    color: {
      neutral: "slider-neutral",
      primary: "slider-primary",
      secondary: "slider-secondary",
      accent: "slider-accent",
      info: "slider-info",
      success: "slider-success",
      warning: "slider-warning",
      error: "slider-error",
    },
    size: {
      xs: "slider-xs",
      sm: "slider-sm",
      md: "slider-md",
      lg: "slider-lg",
      xl: "slider-xl",
    },
  },
})
interface SliderProps extends AriaSliderProps, VariantProps<typeof sliderVariants> {
  dataTheme?: DataTheme
}

const Slider = ({ className, dataTheme, color, size, ...props }: SliderProps) => (
  <AriaSlider
    data-theme={dataTheme}
    className={composeRenderProps(className, (className, renderProps) =>
      sliderVariants({
        ...renderProps,
        color,
        size,
        className,
      }),
    )}
    {...props}
  />
)

const SliderOutput = ({ className, ...props }: SliderOutputProps) => (
  <AriaSliderOutput className={cn("slider-output", className)} {...props} />
)

const SliderTrack = ({ className, ...props }: SliderTrackProps) => (
  <div className="slider-control">
    <AriaSliderTrack
      className={composeRenderProps(className, (className) => cn("slider-track", className))}
      {...props}
    />
  </div>
)

const SliderFiller = ({ className, ...props }: React.ComponentProps<"div">) => {
  const state = React.useContext(SliderStateContext)!

  const { orientation, getThumbPercent, values } = state || {}

  const getStyle = () => {
    const percent0 = getThumbPercent ? getThumbPercent(0) * 100 : 0
    const percent1 = getThumbPercent ? getThumbPercent(1) * 100 : 0

    if (values?.length === 1) {
      return orientation === "horizontal" ? { width: `${percent0}%` } : { height: `${percent0}%` }
    }

    return orientation === "horizontal"
      ? { left: `${percent0}%`, width: `${Math.abs(percent0 - percent1)}%` }
      : { bottom: `${percent0}%`, height: `${Math.abs(percent0 - percent1)}%` }
  }

  return <div style={getStyle()} className={cn("slider-filler", className)} {...props} />
}

const SliderThumb = ({ className }: SliderThumbProps) => (
  <AriaSliderThumb
    className={composeRenderProps(className, (className) => cn("slider-thumb", className))}
  />
)

Slider.Output = SliderOutput
Slider.Track = SliderTrack
Slider.Filler = SliderFiller
Slider.Thumb = SliderThumb

export { Slider }
export type { SliderOutputProps, SliderProps, SliderThumbProps, SliderTrackProps }
