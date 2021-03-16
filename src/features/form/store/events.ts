import { createEvent } from 'effector'
import { ITodo } from 'types'

export const addRecord = createEvent()

export const setFormFields = createEvent<Partial<ITodo>>()
