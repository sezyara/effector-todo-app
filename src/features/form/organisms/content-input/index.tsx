import { useCallback } from 'react'
import { useStore } from 'effector-react'
import { FormItem, Input } from 'ui'
import { $form, setFormFields } from '../../store'

export const ContentInput = () => {
  const { content: value } = useStore($form)

  const onChange = useCallback(
    (content: string) => setFormFields({ content }),
    []
  )

  return (
    <FormItem label='Content'>
      <Input
        onChange={onChange}
        value={value}
      />
    </FormItem>
  )
}
