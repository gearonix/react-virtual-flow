import { AnyFunction }  from '@grnx-utils/types'
import { VoidFunction } from '@grnx-utils/types'

export interface CreatePropsValidatorOptions<T> {
  validate: VoidFunction<Partial<T>>
}

export const createPropsValidator = <T>(
  hook: AnyFunction<unknown, T>,
  opts: CreatePropsValidatorOptions<T>
) => {
  return (props: T) => {
    opts.validate(props)

    return hook(props)
  }
}