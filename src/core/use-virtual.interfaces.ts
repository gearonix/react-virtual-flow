import { Nullable } from '@grnx-utils/types'

export type ItemCacheKey = string | number

export interface UseVirtualProps {
  count: number
  getScrollElement: () => Nullable<Element>
  itemHeight?: (height: number) => number
  overscan?: number
  getEstimateHeight?: (idx: number) => number
  getItemKey: (idx: number) => ItemCacheKey
  scrollingDelay?: number
  onScroll?: (scrollTop: number, isScrolling: boolean) => void
}

export interface VirtualItem {
  key: ItemCacheKey
  idx: number
  offsetTop: number
  virtualHeight: number
}

export interface LatestInstance {
  measurementCache: Record<ItemCacheKey, number>
  getItemKey: (idx: number) => ItemCacheKey
  allItems: VirtualItem[]
  getScrollElement: () => Nullable<Element>
  scrollTop: number
}
