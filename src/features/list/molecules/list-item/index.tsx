import { useCallback, useMemo } from 'react'
import { ITodo } from 'types'
import { CategoryItem } from '../../atoms'
import { deleteRecord } from '../../store'
import classes from './style.module.css'

export interface IListItem {
  data: ITodo
}

export const Item = ({
  data: {
    category,
    content,
    id,
    title
  }
}: IListItem) => {
  const onClick = useCallback(
    () => deleteRecord(id),
    [id]
  )

  const renderCategory = useMemo(
    () => category
      .split(', ')
      .map((item, key) => (
        <CategoryItem key={key}>
          {item}
        </CategoryItem>
      )),
    [category]
  )

  return (
    <div className={classes.item}>
      <div className={classes.title}>
        {title}

        <span
          className={classes.action}
          onClick={onClick}
        >
          Remove
        </span>
      </div>

      {!!content && (
        <div className={classes.content}>
          {content}
        </div>
      )}

      {!!category.length && (
        <div className={classes.categories}>
          {renderCategory}
        </div>
      )}
    </div>
  )
}
