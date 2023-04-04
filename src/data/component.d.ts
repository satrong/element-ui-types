import type { ElTable, ElTableColumn } from './table'
import type { ElTag } from './tag'
import type { ElProgress } from './progress'
import type { ElTree } from './tree'
import type { ElPagination } from './pagination'
import type { ElBadge } from './badge'
import type { ElAvatar } from './avatar'
import type { ElSkeleton, ElSkeletonItem } from './skeleton'
import type { ElEmpty } from './empty'
import type { ElDescriptions, ElDescriptionsItem } from './descriptions'
import type { ElResult } from './result'
import type { ElStatistic } from './statistic'

export interface Data {
  ElTable: ElTable
  ElTableColumn: ElTableColumn
  ElTag: ElTag
  ElProgress: ElProgress
  ElTree: ElTree
  ElPagination: ElPagination
  ElBadge: ElBadge
  ElAvatar: ElAvatar
  ElSkeleton: ElSkeleton
  ElSkeletonItem: ElSkeletonItem
  ElEmpty: ElEmpty
  ElDescriptions: ElDescriptions
  ElDescriptionsItem: ElDescriptionsItem
  ElResult: ElResult
  ElStatistic: ElStatistic
}
