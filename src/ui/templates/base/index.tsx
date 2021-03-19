import { Fragment, FC } from 'react'
import { Header } from '../../organisms'
import classes from './style.module.css'

export const BaseTemplate: FC = ({ children }) => (
  <Fragment>
    <Header />

    <div className={classes.content}>
      {children}
    </div>
  </Fragment>
)
