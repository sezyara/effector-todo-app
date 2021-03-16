import { useCallback } from 'react'
import { useStore } from 'effector-react'
import { $formModalVisibility, setFormModalVisibility } from 'features/@core'
import { Modal } from 'ui'
import { addRecord } from '../../store'
import { CategoriesInput } from '../categories-input'
import { ContentInput } from '../content-input'
import { TitleInput } from '../title-input'

export const Form = () => {
  const visible = useStore($formModalVisibility)

  const onCancel = useCallback(
    () => setFormModalVisibility(false),
    []
  )

  const onOk = useCallback(
    () => addRecord(),
    []
  )

  return (
    <Modal
      okButtonText='Create'
      onCancel={onCancel}
      onOk={onOk}
      title='Create record'
      visible={visible}
    >
      <TitleInput />

      <CategoriesInput />

      <ContentInput />
    </Modal>
  )
}
