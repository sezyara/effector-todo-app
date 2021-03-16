import { useCallback } from 'react'
import { useStore } from 'effector-react'
import { FormItem, Input } from 'ui'
import { $form, setFormFields } from '../../store'

export const CategoriesInput = () => {
  const { category: value } = useStore($form)

  const onChange = useCallback(
    (category: string) => setFormFields({ category }),
    []
  )

  return (
    <FormItem label='Categories'>
      <Input
        onChange={onChange}
        value={value}
      />
    </FormItem>
  )
}
