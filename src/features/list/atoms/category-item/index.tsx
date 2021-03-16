import { FC } from 'react'
import classes from './style.module.css'

export const CategoryItem: FC = ({ children }) => (
  <div className={classes.category}>
    {children}
  </div>
)
