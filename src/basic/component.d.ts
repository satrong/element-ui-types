import type { ElRow, ElCol } from './layout'
import type { ElContainer, ElAside, ElHeader, ElFooter } from './container'
import type { ElButton } from './button'
import type { ElLink } from './link'

export interface Basic {
  ElRow: ElRow
  ElCol: ElCol
  ElContainer: ElContainer
  ElHeader: ElHeader
  ElAside: ElAside
  ElFooter: ElFooter
  ElButton: ElButton
  ElLink: ElLink
}
