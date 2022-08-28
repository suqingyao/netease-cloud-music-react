/*
 * @Author: cully fung
 * @Date: 2022-08-27 10:39:59
 * @LastEditTime: 2022-08-27 10:40:13
 * @LastEditors: cully fung
 * @Description:
 */
export interface TabBarProps {
  tabList: TabItemProps[]
}

export interface TabItemProps {
  icon: string
  label: string
  path: string
}
