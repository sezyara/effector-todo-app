import { createEvent } from 'effector'
import { ITodo } from 'types'

export const addRecord = createEvent<ITodo>()

export const deleteRecord = createEvent<ITodo['id']>()
