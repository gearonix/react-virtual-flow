import { UseVirtualProps }             from '@/lib/use-virtual/use-virtual.interfaces'
import { UseVirtualValidateException } from '@/shared/exceptions'

export const validateProps = ({
  itemHeight,
  getEstimateHeight
}: Partial<UseVirtualProps>) => {
  if (!itemHeight && !getEstimateHeight) {
    throw new UseVirtualValidateException()
  }
}
