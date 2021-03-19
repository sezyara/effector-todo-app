import { FC } from 'react'
import { Button } from 'ui/atoms/button'
import classes from './style.module.css'

export interface IModalProps {
  cancelButtonText?: string
  okButtonText?: string
  onCancel?: () => void
  onOk?: () => void
  title: string
  visible: boolean
}

export const Modal: FC<IModalProps> = ({
  children,
  cancelButtonText,
  okButtonText,
  onCancel,
  onOk,
  title,
  visible
}) => {
  if (!visible) return null

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.overlay}
        onClick={onCancel}
      />

      <div className={classes.modal}>
        <div className={classes.title}>
          {title}
        </div>

        <div className={classes.body}>
          {children}
        </div>

        <div className={classes.footer}>
          <Button
            onClick={onCancel}
            secondary
          >
            {cancelButtonText || 'Cancel'}
          </Button>

          <Button onClick={onOk}>
            {okButtonText || 'Ok'}
          </Button>
        </div>
      </div>
    </div>
  )
}
