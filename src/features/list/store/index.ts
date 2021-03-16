import { createStore } from 'effector'
import { reset } from 'features/@core'
import { ITodo } from 'types'
import { addRecordFx } from './effects'
import { deleteRecord } from './events'

const $list = createStore<ITodo[]>([])
  .on(addRecordFx.done, (state, { result }) => [...state, result])
  .on(deleteRecord, (state, recordId) => state.filter(({ id }) => id !== recordId))
  .reset(reset)

export {
  $list,
  addRecordFx,
  deleteRecord,
  reset
}
