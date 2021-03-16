import { createStore, forward, sample } from 'effector'
import { reset, setFormModalVisibility } from 'features/@core'
import { addRecordFx } from 'features/list'
import { ITodo } from 'types'
import { addRecord, setFormFields } from './events'

const $form = createStore<ITodo>({
  id: '',
  category: '',
  content: '',
  title: ''
})
  .on(setFormFields, (state, payload) => ({ ...state, ...payload }))
  .reset([addRecordFx.done, reset, setFormModalVisibility])

sample({
  source: $form,
  clock: addRecord,
  target: addRecordFx
})

forward({
  from: addRecordFx.done,
  to: setFormModalVisibility.prepend(() => false)
})

export {
  $form,
  addRecord,
  setFormFields
}
