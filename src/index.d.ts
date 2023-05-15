import type { Basic } from './basic/component'
import type { Form } from './form/component'
import type { Data } from './data/component'
import type { Navigation } from './navigation/component'
import type { Notice } from './notice/component'
import type { Others } from './others/component'

export type { ButtonType, EffectType, NoticeType, Placement, Size, ThemeType } from './helper'
export type { Rule, RuleItem, Rules } from './async-validator-type'

export * from './basic/index'
export * from './form/index'
export * from './data/index'
export * from './notice/index'
export * from './navigation/index'
export * from './others/index'

// 2.7版本以上
declare module 'vue' {
  export interface GlobalComponents extends Basic, Form, Data, Navigation, Notice, Others {}
}

// 2.7版本以下
declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends Basic, Form, Data, Navigation, Notice, Others {}
}

// 覆盖 element-ui 的类型声明
declare module 'element-ui' {
  export type { ButtonType, EffectType, NoticeType, Placement, Size, ThemeType } from './helper'
  export type { Rule, RuleItem, Rules } from './async-validator-type'

  export type {
    ElAside as Aside,
    ElCol as Col,
    ElButton as Button,
    ElContainer as Container,
    ElFooter as Footer,
    ElHeader as Header,
    ElLink as Link,
    ElRow as Row
  } from './basic/index'

  export type {
    ElForm as Form,
    ElAutocomplete as Autocomplete,
    ElCascader as Cascader,
    ElCheckbox as Checkbox,
    ElCheckboxButton as CheckboxButton,
    ElCheckboxGroup as CheckboxGroup,
    ElDatePicker as DatePicker,
    ElInput as Input,
    ElInputNumber as InputNumber,
    ElCascaderPanel as CascaderPanel,
    ElCascaderProps as CascaderProps,
    ElColorPicker as ColorPicker,
    ElDatePickerOptions as DatePickerOptions,
    ElDatePickerShortcut as DatePickerShortcut,
    ElFormItem as FormItem,
    ElFormValidateCallback as FormValidateCallback,
    ElOption as Option,
    ElOptionGroup as OptionGroup,
    ElRadio as Radio,
    ElRadioButton as RadioButton,
    ElRadioGroup as RadioGroup,
    ElRate as Rate,
    ElSelect as Select,
    ElSlider as Slider,
    ElSwitch as Switch,
    ElTimePicker as TimePicker,
    ElTimePickerOptions as TimePickerOptions,
    ElTimeSelectOptions as TimeSelectOptions,
    ElUpload as Upload,
    ElTransfer as Transfer,
    ElTransferItem as TransferItem,
    ElUploadFile as UploadFile,
    ElUploadHttpRequestOptions as UploadHttpRequestOptions
  } from './form/index'

  export type {
    ElTable as Table,
    ElTableColumn as TableColumn,
    ElAvatar as Avatar,
    ElBadge as Badge,
    ElDescriptions as Descriptions,
    ElDescriptionsItem as DescriptionsItem,
    ElEmpty as Empty,
    ElPagination as Pagination,
    ElProgress as Progress,
    ElResult as Result,
    ElSkeleton as Skeleton,
    ElSkeletonItem as SkeletonItem,
    ElStatistic as Statistic,
    ElTableLoad as TableLoad,
    ElTableSpanMethod as TableSpanMethod,
    ElTableSummaryMethod as TableSummaryMethod,
    ElTableTreeNode as TableTreeNode,
    ElTag as Tag,
    ElTree as Tree,
    ElTreeCheckChangeHandler as TreeCheckChangeHandler,
    ElTreeCheckHandler as TreeCheckHandler,
    ElTreeCurrentChangeHandler as TreeCurrentChangeHandler,
    ElTreeFilterNodeMethod as TreeFilterNodeMethod,
    ElTreeLoad as TreeLoad,
    ElTreeNode as TreeNode,
    ElTreeNodeClickHandler as TreeNodeClickHandler,
    ElTreeNodeCollapseHandler as TreeNodeCollapseHandler,
    ElTreeNodeContextmenuHandler as TreeNodeContextmenuHandler,
    ElTreeNodeDragEndHandler as TreeNodeDragEndHandler,
    ElTreeNodeDragEnterHandler as TreeNodeDragEnterHandler,
    ElTreeNodeDragLeaveHandler as TreeNodeDragLeaveHandler,
    ElTreeNodeDragOverHandler as TreeNodeDragOverHandler,
    ElTreeNodeDragStartHandler as TreeNodeDragStartHandler,
    ElTreeNodeDropHandler as TreeNodeDropHandler,
    ElTreeNodeExpandHandler as TreeNodeExpandHandler,
    ElTreeProps as TreeProps,
    ElTreeRenderContent as TreeRenderContent,
    ElTreeStore as TreeStore
  } from './data/index'

  export type {
    ElAlert as Alert,
    ElLoadingOptions as LoadingOptions,
    ElMessageBoxOptions as MessageBoxOptions,
    ElMessageOptions as MessageOptions,
    ElNotificationOptions as NotificationOptions
  } from './notice/index'

  export type {
    ElBreadcrumb as Breadcrumb,
    ElBreadcrumbItem as BreadcrumbItem,
    ElDropdown as Dropdown,
    ElDropdownItem as DropdownItem,
    ElDropdownMenu as DropdownMenu,
    ElMenu as Menu,
    ElMenuItem as MenuItem,
    ElMenuItemGroup as MenuItemGroup,
    ElPageHeader as PageHeader,
    ElSteps as Steps,
    ElStep as Step,
    ElSubMenu as SubMenu,
    ElTabPane as TabPane,
    ElTabs as Tabs
  } from './navigation/index'

  export type {
    ElAccordion as Accordion,
    ElAccordionItem as AccordionItem,
    ElBacktop as Backtop,
    ElCalendar as Calendar,
    ElCard as Card,
    ElCarousel as Carousel,
    ElCarouselItem as CarouselItem,
    ElDialog as Dialog,
    ElDivider as Divider,
    ElDrawer as Drawer,
    ElImage as Image,
    ElPopconfirm as Popconfirm,
    ElPopover as Popover,
    ElScrollbar as Scrollbar,
    ElTimeline as Timeline,
    ElTimelineItem as TimelineItem,
    ElTooltip as Tooltip
  } from './others/index'
}
