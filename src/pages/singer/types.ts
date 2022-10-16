// 歌手种类
export const categoryTypes = [
  {
    name: '华语男',
    key: '1001'
  },
  {
    name: '华语女',
    key: '1002'
  },
  {
    name: '华语组合',
    key: '1003'
  },
  {
    name: '欧美男',
    key: '2001'
  },
  {
    name: '欧美女',
    key: '2002'
  },
  {
    name: '欧美组合',
    key: '2003'
  },
  {
    name: '日本男',
    key: '6001'
  },
  {
    name: '日本女',
    key: '6002'
  },
  {
    name: '日本组合',
    key: '6003'
  },
  {
    name: '韩国男',
    key: '7001'
  },
  {
    name: '韩国女',
    key: '7002'
  },
  {
    name: '韩国组合',
    key: '7003'
  },
  {
    name: '其他男歌手',
    key: '4001'
  },
  {
    name: '其他女歌手',
    key: '4002'
  },
  {
    name: '其他组合',
    key: '4003'
  }
]

// 歌手首字母
export const alphaTypes = Array(26)
  .fill(0)
  .map((v, i) => ({
    key: String.fromCharCode(65 + i),
    name: String.fromCharCode(65 + i)
  }))
