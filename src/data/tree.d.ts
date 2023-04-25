import type { Component, CreateElement, VNode } from 'vue'
import type { TComponent } from '../helper'

/**
 * @link https://element.eleme.cn/#/zh-CN/component/tree#props
 */
export interface ElTreeProps {
  /** 指定节点标签为节点对象的某个属性值 */
  label?: string | ((data: any, node: ElTreeNode) => string)
  /** 指定子树为节点对象的某个属性值 */
  children?: string
  /** 指定节点选择框是否禁用为节点对象的某个属性值 */
  disabled?: boolean | ((data: any, node: ElTreeNode) => boolean)
  /** 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 */
  isLeaf?: boolean | ((data: any, node: ElTreeNode) => boolean)
}

export type ElTreeLoad = (node: any, resolve: (data: any[]) => void) => void

export type ElTreeFilterNodeMethod = (value: any, data: any[], node: ElTreeNode) => boolean

export type ElTreeRenderContent = (h: CreateElement, { node, data, store }: { node: ElTreeNode, data: any, store: ElTreeStore }) => VNode

export interface ElTreeStore<T = any> {
  autoExpandParent: boolean
  checkDescendants: boolean
  checkStrictly: boolean
  currentNode: null
  currentNodeKey?: any
  data: T[]
  defaultCheckedKeys?: any[]
  defaultExpandAll: boolean
  defaultExpandedKeys?: any[]
  filterNodeMethod?: ElTreeFilterNodeMethod
  key: string
  lazy: boolean
  load: ElTreeLoad
  nodesMap: Record<string, ElTreeNode<T>>
  props: ElTreeProps
  root: ElTreeNode<T>
}

export interface ElTreeNode<T = any> {
  checked: boolean
  childNodes: ElTreeNode[]
  data: T
  expanded: boolean
  id: number
  indeterminate: boolean
  isCurrent: boolean
  isLeaf: boolean
  isLeafByUser: boolean
  level: number
  loaded: boolean
  loading: boolean
  parent: ElTreeNode
  store: ElTreeStore<T>
  text: null
  visible: boolean
}

export type ElTreeNodeClickHandler<T = any> = (data: T, node: ElTreeNode<T>, treeNodeComponentInstance: Component) => void

export type ElTreeNodeContextmenuHandler<T = any> = (e: Event, data: T, node: ElTreeNode<T>, treeNodeComponentInstance: Component) => void

export type ElTreeCheckChangeHandler<T = any> = (data: T, checked: boolean, indeterminate: boolean) => void

export type ElTreeCheckHandler<T = any> = (data: T, nodes: { checkedNodes: Array<ElTreeNode<T>>, checkedKeys: any[], halfCheckedNodes: Array<ElTreeNode<T>>, halfCheckedKeys: any[] }) => void

export type ElTreeCurrentChangeHandler<T = any> = (data: T, node: ElTreeNode<T>) => void

export type ElTreeNodeExpandHandler<T = any> = (data: T, node: ElTreeNode<T>, treeNodeComponentInstance: Component) => void

export type ElTreeNodeCollapseHandler<T = any> = (data: T, node: ElTreeNode<T>, treeNodeComponentInstance: Component) => void

export type ElTreeNodeDragStartHandler<T = any> = (node: ElTreeNode<T>, e: Event) => void

export type ElTreeNodeDragEnterHandler<T = any> = (draggingNode: ElTreeNode<T>, dropNode: ElTreeNode<T>, e: Event) => void

export type ElTreeNodeDragOverHandler<T = any> = (draggingNode: ElTreeNode<T>, oldDropNode: ElTreeNode<T>, e: Event) => void

export type ElTreeNodeDragLeaveHandler<T = any> = (draggingNode: ElTreeNode<T>, dropNode: ElTreeNode<T>, e: Event) => void

export type ElTreeNodeDragEndHandler<T = any> = (draggingNode: ElTreeNode<T>, dropNode?: ElTreeNode<T>, dropType: 'before' | 'after' | 'inner', e: Event) => void

export type ElTreeNodeDropHandler<T = any> = (draggingNode: ElTreeNode<T>, dropNode: ElTreeNode<T>, dropType: 'before' | 'after' | 'inner', e: Event) => void

/**
 * ## Slot
 *  - `default` 自定义树节点的内容，参数为 `{ node, data }`
 * @link https://element.eleme.cn/#/zh-CN/component/tree#attributes
 */
export type ElTree = TComponent<{
  /** 展示数据 */
  data?: any[]
  /** 内容为空的时候展示的文本 */
  emptyText?: string
  /** 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 */
  nodeKey?: string
  /** 配置选项 */
  props?: ElTreeProps
  /** 是否在第一次展开某个树节点后才渲染其子节点，默认值 `true` */
  renderAfterExpand?: boolean
  /** 加载子树数据的方法，仅当 lazy 属性为true 时生效 */
  load?: ElTreeLoad
  /** 树节点的内容区的渲染 Function */
  renderContent?: ElTreeRenderContent
  /** 是否高亮当前选中节点，默认值是 `false`。 */
  highlightCurrent?: boolean
  /** 是否默认展开所有节点，默认值 `false` */
  defaultExpandAll?: boolean
  /** 是否在点击节点的时候展开或者收缩节点， 默认值为 `true`，如果为 `false`，则只有点箭头图标的时候才会展开或者收缩节点。 */
  expandOnClickNode?: boolean
  /** 是否在点击节点的时候选中节点，默认值为 `false`，即只有在点击复选框时才会选中节点。 */
  checkOnClickNode?: boolean
  /** 展开子节点的时候是否自动展开父节点，默认值 `true` */
  autoExpandParent?: boolean
  /** 默认展开的节点的 key 的数组 */
  defaultExpandedKeys?: any[]
  /** 节点是否可被选择 */
  showCheckbox?: boolean
  /** 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 `false` */
  checkStrictly?: boolean
  /** 默认勾选的节点的 key 的数组 */
  defaultCheckedKeys?: any[]
  /** 当前选中的节点 */
  currentNodeKey?: string | number
  /** 对树节点进行筛选时执行的方法，返回 `true` 表示这个节点可以显示，返回 `false` 则表示这个节点会被隐藏 */
  filterNodeMethod?: ElTreeFilterNodeMethod
  /** 是否每次只打开一个同级树节点展开，默认值 `false` */
  accordion?: boolean
  /** 相邻级节点间的水平缩进，单位为像素，默认值 `16` */
  indent?: number
  /** 自定义树节点的图标 */
  iconClass?: string
  /** 是否懒加载子节点，需与 load 方法结合使用，默认值 `false` */
  lazy?: boolean
  /** 是否开启拖拽节点功能，默认值 `false` */
  draggable?: boolean
  /** 判断节点能否被拖拽 */
  allowDrag?: (node: ElTreeNode) => boolean
  /** 拖拽时判定目标节点能否被放置。type 参数有三种情况：`'prev'`、`'inner'` 和 `'next'`，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后 */
  allowDrop?: (draggingNode: ElTreeNode, dropNode: ElTreeNode, type: 'prev' | 'inner' | 'next') => boolean
  /**
   * 节点被点击时的回调
   * @param data 传递给 data 属性的数组中该节点所对应的对象
   * @param node 节点对应的 Node
   * @param treeNodeComponentInstance 节点组件本身
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeClick?: ElTreeNodeClickHandler
  /**
   * 当某一节点被鼠标右键点击时会触发该事件
   * @param e 事件
   * @param data 传递给 data 属性的数组中该节点所对应的对象
   * @param node 节点对应的 Node
   * @param treeNodeComponentInstance 节点组件本身
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeContextmenu?: ElTreeNodeContextmenuHandler
  /**
   * 节点选中状态发生变化时的回调
   * @param data 传递给 data 属性的数组中该节点所对应的对象
   * @param checked 节点本身是否被选中
   * @param indeterminate 节点的子树中是否有被选中的节点
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onCheckChange?: ElTreeCheckChangeHandler
  /**
   * 当复选框被点击的时候触发
   * @param data 传递给 data 属性的数组中该节点所对应的对象
   * @param checkedList 树目前的选中状态对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onCheck?: ElTreeCheckHandler
  /**
   * 当前选中节点变化时触发的事件
   * @param data 当前节点的数据
   * @param node 当前节点的 Node 对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onCurrentChange?: ElTreeCurrentChangeHandler
  /**
   * 节点被展开时触发的事件
   * @param data 传递给 data 属性的数组中该节点所对应的对象
   * @param node 节点对应的 Node
   * @param treeNodeComponentInstance 节点组件本身
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeExpand?: ElTreeNodeExpandHandler
  /**
   * 节点被关闭时触发的事件
   * @param data 传递给 data 属性的数组中该节点所对应的对象
   * @param node 节点对应的 Node
   * @param treeNodeComponentInstance 节点组件本身
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeCollapse?: ElTreeNodeCollapseHandler
  /**
   * 节点开始拖拽时触发的事件
   * @param node 被拖拽节点对应的 Node
   * @param e 事件对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeDragStart?: ElTreeNodeDragStartHandler
  /**
   * 拖拽进入其他节点时触发的事件
   * @param draggingNode 被拖拽节点对应的 Node
   * @param dropNode 拖拽进入的节点对应的 Node
   * @param e 事件对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeDragEnter?: ElTreeNodeDragEnterHandler
  /**
   * 拖拽离开某个节点时触发的事件
   * @param draggingNode 被拖拽节点对应的 Node
   * @param oldDropNode 拖拽离开的节点对应的 Node
   * @param e 事件对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeDragLeave?: ElTreeNodeDragLeaveHandler
  /**
   * 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）
   * @param draggingNode 被拖拽节点对应的 Node
   * @param dropNode 当前进入节点对应的 Node
   * @param e 事件对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeDragOver?: ElTreeNodeDragOverHandler
  /**
   * 拖拽结束时（可能未成功）触发的事件
   * @param draggingNode 被拖拽节点对应的 Node
   * @param dropNode 结束拖拽时最后进入的节点（可能为空）
   * @param dropType 被拖拽节点的放置位置
   * @param e 事件对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeDragEnd?: ElTreeNodeDragEndHandler
  /**
   * 拖拽成功完成时触发的事件
   * @param draggingNode 被拖拽节点对应的 Node
   * @param dropNode 结束拖拽时最后进入的节点
   * @param dropType 被拖拽节点的放置位置
   * @param e 事件对象
   * @link https://element.eleme.cn/#/zh-CN/component/tree#events
   */
  onNodeDrop?: ElTreeNodeDropHandler
}, {
  /**
   * 对树节点进行筛选操作
   * @param value 任意类型的参数，该参数会在 `filter-node-method` 中作为第一个参数
   */
  filter: (value: any) => void
  /**
   * 通过 keys 设置节点子元素，使用此方法必须设置 `node-key` 属性
   * @param key 节点 key
   * @param data 节点数据的数组
   */
  updateKeyChildren: (key: string, data: any[]) => void
  /**
   * 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组
   * @param leafOnly 是否只是叶子节点，默认值为 `false`
   * @param includeHalfChecked 是否包含半选节点，默认值为 `false`
   */
  getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => any[]
  /**
   * 设置目前勾选的节点，使用此方法必须设置 `node-key` 属性
   * @param nodes 勾选节点数据的数组
   */
  setCheckedNodes: (nodes: ElTreeNode[]) => void
  /**
   * 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组
   * @param leafOnly 是否只是叶子节点，默认值为 `false`
   */
  getCheckedKeys: (leafOnly?: boolean) => any[]
  /**
   * 通过 keys 设置目前勾选的节点，使用此方法必须设置 `node-key` 属性
   * @param keys 勾选节点的 key 的数组
   * @param leafOnly 是否只是叶子节点，默认值为 `false`
   */
  setCheckedKeys: (keys: string[], leafOnly?: boolean) => void
  /**
   * 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 `node-key` 属性
   * @param keyOrData 勾选节点的 key 或者 data
   * @param checked 节点是否选中
   * @param deep 是否设置子节点，默认为 `false`
   */
  setChecked: (keyOrData: string | any, checked: boolean, deep?: boolean) => void
  /**
   * 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点所组成的数组
   */
  getHalfCheckedNodes: () => ElTreeNode[]
  /**
   * 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前半选中的节点的 key 所组成的数组
   */
  getHalfCheckedKeys: () => any[]
  /**
   * 获取当前被选中节点的 key，使用此方法必须设置 `node-key` 属性，若没有节点被选中则返回 `null`
   */
  getCurrentKey: () => any | null
  /**
   * 获取当前被选中节点的 data，若没有节点被选中则返回 `null`
   */
  getCurrentNode: () => any | null
  /**
   * 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 `node-key` 属性
   * @param key 待被选节点的 key，若为 `null` 则取消当前高亮的节点
   */
  setCurrentKey: (key: string | null) => void
  /**
   * 通过 node 设置某个节点的当前选中状态，使用此方法必须设置 `node-key` 属性
   * @param node 待被选节点的 node
   */
  setCurrentNode: (node: ElTreeNode) => void
  /**
   * 根据 data 或者 key 拿到 Tree 组件中的 node
   * @param data 要获得 node 的 key 或者 data
   */
  getNode: (keyOrData: any) => ElTreeNode | null
  /**
   * 删除 Tree 中的一个节点，使用此方法必须设置 `node-key` 属性
   * @param data 要删除的节点的 data 或者 node
   */
  remove: (dataOrNode: any | ElTreeNode) => void
  /**
   * 为 Tree 中的一个节点追加一个子节点
   * @param data 要追加的子节点的 data
   * @param parentNode 子节点的 parent 的 data、key 或者 node
   */
  append: (data: any, parentNode: any | ElTreeNode) => void
  /**
   * 为 Tree 的一个节点的前面增加一个节点
   * @param data 要增加的节点的 data
   * @param refNode 要增加的节点的后一个节点的 data、key 或者 node
   */
  insertBefore: (data: any, refNode: any | ElTreeNode) => void
  /**
   * 为 Tree 的一个节点的后面增加一个节点
   * @param data 要增加的节点的 data
   * @param refNode 要增加的节点的前一个节点的 data、key 或者 node
   */
  insertAfter: (data: any, refNode: any | ElTreeNode) => void
}>
