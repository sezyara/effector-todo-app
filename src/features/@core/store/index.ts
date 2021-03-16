import { createStore } from 'effector'
import { reset, setFormModalVisibility } from './events'

const $formModalVisibility = createStore(false)
  .on(setFormModalVisibility, (_, payload) => payload)
  .reset(reset)

export {
  $formModalVisibility,
  reset,
  setFormModalVisibility
}
