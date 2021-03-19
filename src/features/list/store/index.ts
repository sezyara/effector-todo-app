import { combine, createStore } from 'effector'
import { reset } from 'features/@core'
import { ITodo } from 'types'
import { addRecordFx } from './effects'
import { deleteRecord, resetActiveCategory, setActiveCategory } from './events'

const $list = createStore<ITodo[]>([])
  .on(addRecordFx.done, (state, { result }) => [...state, result])
  .on(deleteRecord, (state, recordId) => state.filter(({ id }) => id !== recordId))
  .reset(reset)

const $activeCategory = createStore('')
  .on(setActiveCategory, (_, value) => value)
  .reset([reset, resetActiveCategory])

const $categories = $list.map(list => list.map(({ category }) => category
  .split(', '))
  .flat()
  .reduce<string[]>((acc, item) => {
    if (!item.trim()) return acc

    return [...acc, item.trim()]
  }, [])
)

const $filteredList = combine(
  [$list, $activeCategory],
  ([list, category]) => list.filter(({ category: mappedCategory }) => {
    if (!category) return list

    return mappedCategory.split(', ').some(item => item.trim() === category)
  }))

export {
  $activeCategory,
  $categories,
  $filteredList,
  addRecordFx,
  deleteRecord,
  resetActiveCategory,
  setActiveCategory,
  reset
}
