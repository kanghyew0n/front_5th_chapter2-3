import { forwardRef } from "react"
import { CardProps } from "./types"

export const CardContent = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
))

CardContent.displayName = "CardContent"
