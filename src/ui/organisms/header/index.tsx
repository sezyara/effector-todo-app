import { useCallback } from 'react'
import { setFormModalVisibility } from 'features/@core'
import { Button } from 'ui'
import classes from './style.module.css'

export interface IHeaderProps {
  title?: string
}

export const Header = ({ title = 'TODO app' }: IHeaderProps) => {
  const onActionClick = useCallback(
    () => setFormModalVisibility(true),
    []
  )

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.title}>
          {title}
        </div>

        <div className={classes.actions}>
          <Button
            className={classes.add}
            onClick={onActionClick}
          >
            +
          </Button>
        </div>
      </div>
    </header>
  )
}
