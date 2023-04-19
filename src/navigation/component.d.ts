import type { ElMenu, ElSubMenu, ElMenuItem, ElMenuItemGroup } from './menu'
import type { ElTabs, ElTabPane } from './tabs'
import type { ElBreadcrumb, ElBreadcrumbItem } from './breadcrumb'
import type { ElPageHeader } from './page-header'
import type { ElDropdown, ElDropdownMenu, ElDropdownItem } from './dropdown'
import type { ElSteps, ElStep } from './steps'

export interface Navigation {
  ElMenu: ElMenu
  ElSubMenu: ElSubMenu
  ElMenuItem: ElMenuItem
  ElMenuItemGroup: ElMenuItemGroup
  ElTabs: ElTabs
  ElTabPane: ElTabPane
  ElBreadcrumb: ElBreadcrumb
  ElBreadcrumbItem: ElBreadcrumbItem
  ElPageHeader: ElPageHeader
  ElDropdown: ElDropdown
  ElDropdownMenu: ElDropdownMenu
  ElDropdownItem: ElDropdownItem
  ElSteps: ElSteps
  ElStep: ElStep
}
