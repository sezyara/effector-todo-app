import { createEvent } from 'effector'

export const reset = createEvent()

export const setFormModalVisibility = createEvent<boolean>()
