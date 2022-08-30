export interface TabBarProps {
  tabList: TabItemProps[]
}

export interface TabItemProps {
  default: string
  active: string
  label: string
  path: string
}
