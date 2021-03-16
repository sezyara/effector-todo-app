import { createEffect } from 'effector'
import { v4 as uuidv4 } from 'uuid'
import { ITodo } from 'types'

export const addRecordFx = createEffect({
  handler (record: Omit<ITodo, 'id'>) {
    return {
      ...record,
      id: uuidv4()
    } as ITodo
  }
})
