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

export const TextArea = ({
  onChange,
  value
}: IInputProps) => {
  const wrappedOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <textarea
      className={classes.input}
      onChange={wrappedOnChange}
      rows={5}
      value={value}
    />
  )
}

Input.TextArea = TextArea

export default Input
