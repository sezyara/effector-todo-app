import { useCallback } from 'react'
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

  return (
    <div className={classes.item}>
      <div className={classes.title}>
        {title}

        <span onClick={onClick}>
          Remove
        </span>
      </div>

      <div className={classes.conetnt}>
        {content}
      </div>

      <div className={classes.categories}>
        {category.split(', ').map((item, key) => (
          <CategoryItem key={key}>
            {item}
          </CategoryItem>
        ))}
      </div>
    </div>
  )
}
