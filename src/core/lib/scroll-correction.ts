import { MutableRefObject }   from 'react'

import { LatestInstance }     from '@/core/use-virtual.interfaces'
import { createDOMScheduler } from '@/shared/lib'

export interface FixScrollCorrectionProps {
  height: number
  elementIdx: number
  latestInstance: MutableRefObject<LatestInstance>
}

export const fixScrollCorrection = ({
  height,
  elementIdx,
  latestInstance
}: FixScrollCorrectionProps) => {
  const { getScrollElement, scrollTop, allItems } = latestInstance.current

  const virtualElement = allItems[elementIdx]

  const delta = height - virtualElement.virtualHeight

  if (delta === 0 || virtualElement.offsetTop >= scrollTop) return

  const scrollElement = getScrollElement()

  if (scrollElement) {
    const schedule = createDOMScheduler()

    schedule(() => {
      scrollElement.scrollBy(0, delta)
    })
  }
}
