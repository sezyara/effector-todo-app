import { createEvent } from 'effector'
import { ITodo } from 'types'

export const deleteRecord = createEvent<ITodo['id']>()

export const resetActiveCategory = createEvent()

export const setActiveCategory = createEvent<string>()
