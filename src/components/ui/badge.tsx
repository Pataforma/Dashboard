
import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'badge bg-primary',
    secondary: 'badge bg-secondary', 
    destructive: 'badge bg-danger',
    outline: 'badge border border-primary text-primary bg-transparent'
  }

  return (
    <div className={cn(variants[variant], className)} {...props} />
  )
}

export { Badge }
