import { useCallback } from 'react'
import { useStore } from 'effector-react'
import { FormItem, Input } from 'ui'
import { $form, setFormFields } from '../../store'

export const TitleInput = () => {
  const { title: value } = useStore($form)

  const onChange = useCallback(
    (title: string) => setFormFields({ title }),
    []
  )

  return (
    <FormItem label='Title'>
      <Input
        onChange={onChange}
        value={value}
      />
    </FormItem>
  )
}
