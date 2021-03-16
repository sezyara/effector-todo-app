import { FC } from 'react'
import classes from './style.module.css'

export interface IFormItemProps {
  label: string
}

export const FormItem: FC<IFormItemProps> = ({
  children,
  label
}) => {
  return (
    <div className={classes.item}>
      <label className={classes.label}>
        {label}:
      </label>

      {children}
    </div>
  )
}
