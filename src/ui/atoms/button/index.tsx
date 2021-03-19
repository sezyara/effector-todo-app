import { FC } from 'react'
import cn from 'classnames'
import classes from './style.module.css'

export interface IButtonProps {
  className?: string
  onClick?: () => void
  secondary?: boolean
}

export const Button: FC<IButtonProps> = ({
  className,
  children,
  onClick,
  secondary = false
}) => (
  <button
    className={cn(classes.button, className, {
      [classes.secondary]: !!secondary
    })}
    onClick={onClick}
  >
    {children}
  </button>
)
