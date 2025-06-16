"use client"

import React from "react"
import type { SliderOutputProps, SliderThumbProps, SliderTrackProps } from "react-aria-components"
import {
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
  composeRenderProps,
  SliderStateContext,
} from "react-aria-components"
import { tv, VariantProps } from "tailwind-variants"
import { createContext } from "../lib/context"

const sliderVariants = tv({
  slots: {
    root: "group relative isolate flex touch-none flex-col gap-2",
    track: "bg-muted relative grow cursor-pointer rounded-full",
    range: "bg-primary absolute rounded-full",
    thumb:
      "border-primary bg-background ring-ring/50 top-[50%] left-[50%] block shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4",
    output: "text-muted-foreground text-sm",
  },
  variants: {
    orientation: {
      horizontal: {
        root: "",
        track: "w-full",
        range: "h-full",
      },
      vertical: {
        root: "",
        track: "h-full",
        range: "w-full",
      },
    },
    size: {
      sm: {
        track: "data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5",
        thumb: "size-4",
      },
      md: {
        track: "data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2",
        thumb: "size-5",
      },
      lg: {
        track: "data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5",
        thumb: "size-6",
      },
    },
    isDisabled: {
      true: {
        track: "cursor-default",
        range: "bg-primary/15",
        thumb: "pointer-events-none opacity-50",
      },
    },
    isFocusable: {
      true: {
        thumb: "ring-4 outline-hidden",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const { root, track, range, thumb, output } = sliderVariants()

const [SliderProvider, useSliderContext] = createContext<VariantProps<typeof sliderVariants>>({
  name: "SliderContext",
})

interface SliderProps
  extends React.ComponentProps<typeof AriaSlider>,
    VariantProps<typeof sliderVariants> {}

function Slider({ className, size, children, ...props }: SliderProps) {
  return (
    <AriaSlider
      data-slot="slider"
      className={composeRenderProps(className, (className, renderProps) =>
        root({
          ...renderProps,
          className,
        }),
      )}
      {...props}
    >
      {composeRenderProps(children, (children, { orientation }) => (
        <SliderProvider value={{ orientation, size }}>{children}</SliderProvider>
      ))}
    </AriaSlider>
  )
}

function SliderOutput({ className, ...props }: SliderOutputProps) {
  return (
    <AriaSliderOutput
      data-slot="slider-output"
      className={composeRenderProps(className, (className, renderProps) =>
        output({
          ...renderProps,
          className,
        }),
      )}
      {...props}
    />
  )
}

function SliderTrack({ className, ...props }: SliderTrackProps) {
  const { orientation, size } = useSliderContext()

  return (
    <AriaSliderTrack
      data-slot="slider-track"
      className={composeRenderProps(className, (className, renderProps) =>
        track({ ...renderProps, className, orientation, size }),
      )}
      {...props}
    />
  )
}

function SliderRange({ className, ...props }: React.ComponentProps<"div">) {
  const state = React.useContext(SliderStateContext)!

  const { orientation, isDisabled, getThumbPercent, values } = state || {}

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

  return (
    <div
      data-slot="slider-range"
      style={getStyle()}
      className={range({ orientation, isDisabled, className })}
      {...props}
    />
  )
}

function SliderThumb({ className, ...props }: SliderThumbProps) {
  const { size } = useSliderContext()

  return (
    <AriaSliderThumb
      data-slot="slider-thumb"
      className={composeRenderProps(className, (className, renderProps) =>
        thumb({
          ...renderProps,
          className,
          size,
        }),
      )}
      {...props}
    />
  )
}

export { Slider, SliderOutput, SliderRange, SliderThumb, SliderTrack }
export type { SliderOutputProps, SliderProps, SliderThumbProps, SliderTrackProps }
