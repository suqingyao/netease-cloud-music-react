/*
 * @Author: cully fung
 * @Date: 2022-08-27 10:39:59
 * @LastEditTime: 2022-08-28 10:38:34
 * @LastEditors: cully fung
 * @Description:
 */
export interface TabBarProps {
  tabList: TabItemProps[]
}

export interface TabItemProps {
  default: string
  active: string
  label: string
  path: string
}
