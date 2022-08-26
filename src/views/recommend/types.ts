/*
 * @Author: cully fung
 * @Date: 2022-08-26 16:24:09
 * @LastEditTime: 2022-08-27 01:05:49
 * @LastEditors: cully fung
 * @Description:
 */
export interface PlayList {
  id: string
  coverImgUrl: string
  name: string
  children?: React.ReactNode
}
