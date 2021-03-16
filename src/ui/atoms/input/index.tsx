import { ChangeEvent } from 'react'
import classes from './style.module.css'

export interface IInputProps {
  onChange?: (value: string) => void
  value?: string
}

export const Input = ({
  onChange,
  value
}: IInputProps) => {
  const wrappedOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <input
      className={classes.input}
      onChange={wrappedOnChange}
      type='text'
      value={value}
    />
  )
}
