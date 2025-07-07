
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'warning'
  size?: 'sm' | 'default' | 'lg' | 'icon'
  asChild?: boolean
}

// Export buttonVariants function that other components expect
export const buttonVariants = ({ 
  variant = 'primary', 
  size = 'default' 
}: { 
  variant?: ButtonProps['variant'], 
  size?: ButtonProps['size'] 
} = {}) => {
  const baseClasses = 'btn d-inline-flex align-items-center justify-content-center text-decoration-none border-0'
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary', 
    outline: 'btn-outline-primary',
    ghost: 'btn-link text-dark',
    link: 'btn-link p-0',
    warning: 'btn-warning'
  }
  
  const sizes = {
    default: '',
    sm: 'btn-sm',
    lg: 'btn-lg',
    icon: 'btn-sm d-flex align-items-center justify-content-center'
  }

  return cn(
    baseClasses,
    variants[variant],
    sizes[size]
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button'
    
    const classes = cn(
      buttonVariants({ variant, size }),
      className
    )

    return (
      <Comp
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
