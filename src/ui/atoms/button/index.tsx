import { FC } from 'react'
import classes from './style.module.css'

export interface IButtonProps {
  onClick?: () => void
  type?: 'secondary'
}

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  type
}) => {
  const buttonCls = classes.button + (type === 'secondary' ? ` ${classes.secondary}` : '')

  return (
    <button
      className={buttonCls}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
