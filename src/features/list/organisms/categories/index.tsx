import { useCallback, useMemo } from 'react'
import { useStore } from 'effector-react'
import cn from 'classnames'
import { $activeCategory, $categories, resetActiveCategory, setActiveCategory } from '../../store'
import classes from './style.module.css'

export const Categories = () => {
  const data = useStore($categories)

  const renderCategories = useMemo(
    () => data.map((title, key) => (
      <CategoryItem
        key={key}
        title={title}
      />
    )),
    [data]
  )

  const resetActive = useCallback(
    () => resetActiveCategory(),
    []
  )

  return (
    <div className={classes.categories}>
      {!!data.length && (
        <span onClick={resetActive}>
          Show all
        </span>
      )}

      {renderCategories}
    </div>
  )
}

const CategoryItem = ({ title }: { title: string }) => {
  const activeCategory = useStore($activeCategory)

  const value = title.trim()

  const onClick = () => setActiveCategory(value)

  const className = cn({
    [classes.active]: activeCategory === value
  })

  return (
    <span
      className={className}
      onClick={onClick}
    >
      {value}
    </span>
  )
}
