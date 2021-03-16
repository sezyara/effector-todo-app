import { Fragment, FC } from 'react'
import { Header } from '../../organisms'
import classes from './style.module.css'

export const BaseTempalate: FC = ({ children }) => (
  <Fragment>
    <Header title='TODO app' />

    <div className={classes.content}>
      {children}
    </div>
  </Fragment>
)
