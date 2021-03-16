import { useMemo } from 'react'
import { useStore } from 'effector-react'
import { Item } from '../../molecules'
import { $list } from '../../store'
import classes from './style.module.css'

export const List = () => {
  const data = useStore($list)

  const renderList = useMemo(
    () => data.map(item => (
      <Item
        key={item.id}
        data={item}
      />
    )),
    [data]
  )

  return (
    <div className={classes.list}>
      {renderList}
    </div>
  )
}
