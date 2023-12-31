import { MutableRefObject }        from 'react'

import { LatestInstance }          from '@/core/use-virtual.interfaces'
import { VIRTUAL_INDEX_ATTRIBUTE } from '@/shared/consts'
import { NoVirtualIndexException } from '@/shared/exceptions'

export interface GetCacheKeyProps {
  element: Element
  latestInstance: MutableRefObject<LatestInstance>
}

/**
 * Returns the cache key of the element,
 * according to the data-vindex attribute.
 * @param element - DOM Element
 * @param latestInstance - instance of useLatest hook
 */

export const getCacheKey = ({
  element,
  latestInstance
}: GetCacheKeyProps) => {
  const idxAttribute = element.getAttribute(VIRTUAL_INDEX_ATTRIBUTE) ?? ''
  const elementIdx = Number.parseInt(idxAttribute, 10)

  if (Number.isNaN(elementIdx)) {
    throw new NoVirtualIndexException()
  }

  const { getItemKey } = latestInstance.current

  return {
    cacheKey: getItemKey(elementIdx),
    elementIdx
  }
}
