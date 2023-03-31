import type { CreateElement, VNode } from 'vue'
import type { TComponent, Size, EffectType } from '../helper'

interface TreeNode<T> {
  children: T[]
  display: boolean
  expanded: boolean
  lazy: boolean
  level: number
  loaded: boolean
  loading: boolean
}

type CssStyle = Record<string, string>

export type TableSummaryMethod<Data = any, Column = any> = (param: { columns: Column[], data: Data[] }) => any[]

export type TableSpanMethod<Row = any, Column = any> = (param: { row: Row, column: Column, rowIndex: number, columnIndex: number }) => [number, number] | { rowspan: number, colspan: number }

export type TableLoad<Row = any> = (row: Row, treeNode: TreeNode<Row>, resolve: (data: Row[]) => void) => void

/**
 * ## Slot
 *  - `append` 插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。
 * @link https://element.eleme.cn/#/zh-CN/component/table#table-attributes
 */
export type TElTable = TComponent<{
  /** 显示的数据 */
  data: any[]
  /** Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 */
  height?: string | number
  /** Table 的最大高度。合法的值为数字或者单位为 px 的高度。 */
  maxHeight?: string | number
  /** 是否为斑马纹 table，默认值 `false` */
  stripe?: boolean
  /** 是否带有纵向边框，默认值 `false` */
  border?: boolean
  /** Table 的尺寸 */
  size?: Size
  /** 列的宽度是否自撑开，默认值 `true` */
  fit?: boolean
  /** 是否显示表头，默认值 `true` */
  showHeader?: boolean
  /** 是否要高亮当前行 */
  highlightCurrentRow?: boolean
  /** 当前行的 key，只写属性 */
  currentRowKey?: string | number
  /** 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 */
  rowClassName?: string | ((row: any, rowIndex: number) => string)
  /** 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 */
  rowStyle?: CssStyle | ((row: any, rowIndex: number) => CssStyle)
  /** 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 */
  cellClassName?: string | ((row: any, column: any, rowIndex: number, columnIndex: number) => string)
  /** 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 */
  cellStyle?: CssStyle | ((row: any, column: any, rowIndex: number, columnIndex: number) => CssStyle)
  /** 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 */
  headerRowClassName?: string | ((row: any, rowIndex: number) => string)
  /** 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 */
  headerRowStyle?: CssStyle | ((row: any, rowIndex: number) => CssStyle)
  /** 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 */
  headerCellClassName?: string | ((row: any, column: any, rowIndex: number, columnIndex: number) => string)
  /** 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 */
  headerCellStyle?: CssStyle | ((row: any, column: any, rowIndex: number, columnIndex: number) => CssStyle)
  /** 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。 */
  rowKey?: string | ((row: any) => any)
  /** 空数据时显示的文本内容，也可以通过 slot="empty" 设置，默认值 `暂无数据` */
  emptyText?: string
  /** 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效，默认值 `false` */
  defaultExpandAll?: boolean
  /** 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 */
  expandRowKeys?: any[]
  /** 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序。如果只指定了prop, 没有指定order, 则默认顺序是ascending */
  defaultSort?: {
    prop: string
    order: 'ascending' | 'descending'
  }
  /** tooltip effect 属性 */
  tooltipEffect?: EffectType
  /** 是否在表尾显示合计行，默认值 `false` */
  showSummary?: boolean
  /** 合计行第一列的文本，默认值 `合计` */
  sumText?: string
  /** 自定义的合计计算方法 */
  summaryMethod?: TableSummaryMethod
  /** 合并行或列的计算方法 */
  spanMethod?: TableSpanMethod
  /** 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行，默认值 `true` */
  selectOnIndeterminate?: boolean
  /** 展示树形数据时，树节点的缩进，默认值 `16` */
  indent?: number
  /** 是否懒加载子节点数据，默认值 `false` */
  lazy?: boolean
  /** 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 */
  load?: TableLoad
  /** 渲染嵌套数据的配置选项 */
  treeProps?: {
    hasChildren: string
    children: string
  }
  /**
   * 当用户手动勾选数据行的 Checkbox 时触发的事件
   */
  onSelect: (selection: any[], row: any) => void
  /** 当用户手动勾选全选 Checkbox 时触发的事件 */
  onSelectAll: (selection: any[]) => void
  /** 当选择项发生变化时会触发该事件 */
  onSelectionChange: (selection: any[]) => void
  /** 当单元格 hover 进入时会触发该事件 */
  onCellMouseEnter: (row: any, column: any, cell: any, event: Event) => void
  /** 当单元格 hover 退出时会触发该事件 */
  onCellMouseLeave: (row: any, column: any, cell: any, event: Event) => void
  /** 当某个单元格被点击时会触发该事件 */
  onCellClick: (row: any, column: any, cell: any, event: Event) => void
  /** 当某个单元格被双击击时会触发该事件 */
  onCellDblclick: (row: any, column: any, cell: any, event: Event) => void
  /** 当某一行被点击时会触发该事件 */
  onRowClick: (row: any, column: any, event: Event) => void
  /** 当某一行被鼠标右键点击时会触发该事件 */
  onRowContextmenu: (row: any, column: any, event: Event) => void
  /** 当某一行被双击时会触发该事件 */
  onRowDblclick: (row: any, column: any, event: Event) => void
  /** 当某一列的表头被点击时会触发该事件 */
  onHeaderClick: (column: any, event: Event) => void
  /** 当某一列的表头被鼠标右键点击时触发该事件 */
  onHeaderContextmenu: (column: any, event: Event) => void
  /** 当表格的排序条件发生变化的时候会触发该事件 */
  onSortChange: (column: any, prop: string, order: string) => void
  /** 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。 */
  onFilterChange: (filters: any) => void
  /** 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 */
  onCurrentChange: (currentRow: any, oldCurrentRow: any) => void
  /** 当拖动表头改变了列的宽度的时候会触发该事件 */
  onHeaderDragend: (newWidth: number, oldWidth: number, column: any, event: Event) => void
  /** 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） */
  onExpand: (row: any, expandedRows: any[]) => void
}, {
  /** 用于多选表格，清空用户的选择 */
  clearSelection: () => void
  /** 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） */
  toggleRowSelection: (row: any, selected?: boolean) => void
  /** 用于多选表格，切换所有行的选中状态 */
  toggleAllSelection: () => void
  /** 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） */
  toggleRowExpansion: (row: any, expanded?: boolean) => void
  /** 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 */
  setCurrentRow: (row: any) => void
  /** 用于清空排序条件，数据会恢复成未排序的状态 */
  clearSort: () => void
  /** 不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件 */
  clearFilter: (keys?: string[]) => void
  /** 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法 */
  doLayout: () => void
  /** 手动对 Table 进行排序。参数prop属性指定排序列，order指定排序顺序。 */
  sort: (prop: string, order: string) => void
}>

/**
 * ## Slot
 *  - `default` 自定义列的内容. 参数为 `{ row, column, $index }`
 *  - `header` 自定义表头的内容. 参数为 `{ column, $index }`
 * @link https://element.eleme.cn/#/zh-CN/component/table#table-column-attributes
 */
export type TElTableColumn = TComponent<{
  /** 对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮 */
  type?: 'selection' | 'index' | 'expand'
  /** 如果设置了 type=index，可以通过传递 index 属性来自定义索引 */
  index?: number | ((index: number) => number)
  /** column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 */
  columnKey?: string
  /** 显示的标题 */
  label?: string
  /** 对应列内容的字段名，也可以使用 property 属性 */
  prop?: string
  /** 对应列的宽度 */
  width?: string | number
  /** 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 */
  minWidth?: string | number
  /** 列是否固定在左侧或者右侧，true 表示固定在左侧 */
  fixed?: boolean | 'left' | 'right'
  /** 列标题 Label 区域渲染使用的 Function */
  renderHeader?: (h: CreateElement, param: { column: any, $index: number }) => VNode
  /** 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件，默认值 `false` */
  sortable?: boolean | 'custom'
  /** 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 */
  sortMethod?: (a: any, b: any) => number
  /** 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 */
  sortBy?: string | string[] | ((row: any, index: number) => any)
  /** 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序，默认值 `['ascending', 'descending', null]` */
  sortOrders?: Array<'ascending' | 'descending' | null>
  /** 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真），默认值 `true` */
  resizable?: boolean
  /** 用来格式化内容 */
  formatter?: (row: any, column: any, cellValue: any, index: number) => any
  /** 当内容过长被隐藏时显示 tooltip，默认值 `false` */
  showOverflowTooltip?: boolean
  /** 对齐方式，可选值为 `left`、`center`、`right`，默认值 `left` */
  align?: 'left' | 'center' | 'right'
  /** 表头对齐方式，若不设置该项，则使用表格的对齐方式，可选值为 `left`、`center`、`right` */
  headerAlign?: 'left' | 'center' | 'right'
  /** 列的 className */
  className?: string
  /** 当前列标题的自定义类名 */
  labelClassName?: string
  /** 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 */
  selectable?: (row: any, index: number) => boolean
  /** 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key），默认值 `false` */
  reserveSelection?: boolean
  /** 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 */
  filters?: Array<{ text: string, value: any }>
  /** 过滤弹出框的定位，与 Tooltip 的 placement 属性相同 */
  filterPlacement?: string
  /** 数据过滤的选项是否多选，默认值 `true` */
  filterMultiple?: boolean
  /** 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 */
  filterMethod?: (value: any, row: any, column: any) => boolean
  /** 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 */
  filteredValue?: any[]
}>

declare module 'vue' {
  interface GlobalComponents {
    ElTable: TElTable
    ElTableColumn: TElTableColumn
  }
}
