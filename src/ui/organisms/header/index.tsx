import { useCallback } from 'react'
import { setFormModalVisibility } from 'features/@core'
import { Button } from 'ui'
import classes from './style.module.css'

export interface IHeaderProps {
  title: string
}

export const Header = ({ title }: IHeaderProps) => {
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

        <div className={classes.action}>
          <Button onClick={onActionClick}>
            +
          </Button>
        </div>
      </div>
    </header>
  )
}
