export interface Result {
  code: number
  relatedVideos?: any
  playlist: Playlist
  urls?: any
  privileges: Privilege[]
  sharedPrivilege?: any
  resEntrance?: any
}

interface Privilege {
  id: number
  fee: number
  payed: number
  realPayed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  pc?: any
  toast: boolean
  flag: number
  paidBigBang: boolean
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: number
  freeTrialPrivilege: FreeTrialPrivilege
  chargeInfoList: ChargeInfoList[]
}

interface ChargeInfoList {
  rate: number
  chargeUrl?: any
  chargeMessage?: any
  chargeType: number
}

interface FreeTrialPrivilege {
  resConsumable: boolean
  userConsumable: boolean
  listenType?: any
}

export interface Playlist {
  id: number
  name: string
  coverImgId: number
  coverImgUrl: string
  coverImgIdStr: string
  adType: number
  userId: number
  createTime: number
  status: number
  opRecommend: boolean
  highQuality: boolean
  newImported: boolean
  updateTime: number
  trackCount: number
  specialType: number
  privacy: number
  trackUpdateTime: number
  commentThreadId: string
  playCount: number
  trackNumberUpdateTime: number
  subscribedCount: number
  cloudTrackCount: number
  ordered: boolean
  description: string
  tags: any[]
  updateFrequency?: any
  backgroundCoverId: number
  backgroundCoverUrl?: any
  titleImage: number
  titleImageUrl?: any
  englishTitle?: any
  officialPlaylistType?: any
  copied: boolean
  subscribers: Subscriber[]
  subscribed?: any
  creator: Creator
  tracks: Track[]
  videoIds?: any
  videos?: any
  trackIds: TrackId[]
  shareCount: number
  commentCount: number
  remixVideo?: any
  sharedUsers?: any
  historySharedUsers?: any
  gradeStatus: string
  score?: any
  algTags?: any
  toplistType: string
}

interface TrackId {
  id: number
  v: number
  t: number
  at: number
  alg?: any
  uid: number
  rcmdReason: string
  sc?: any
  lr?: number
}

interface Track {
  name: string
  id: number
  pst: number
  t: number
  ar: Ar[]
  alia: string[]
  pop: number
  st: number
  rt: string
  fee: number
  v: number
  crbt?: any
  cf: string
  al: Al
  dt: number
  h: H
  m: H
  l: H
  sq?: H
  hr?: H
  a?: any
  cd: string
  no: number
  rtUrl?: any
  ftype: number
  rtUrls: any[]
  djId: number
  copyright: number
  sId: number
  mark: number
  originCoverType: number
  originSongSimpleData?: OriginSongSimpleDatum
  tagPicList?: any
  resourceState: boolean
  version: number
  songJumpInfo?: any
  entertainmentTags?: any
  single: number
  noCopyrightRcmd?: any
  rtype: number
  rurl?: any
  mst: number
  cp: number
  mv: number
  publishTime: number
  tns?: string[]
}

interface OriginSongSimpleDatum {
  songId: number
  name: string
  artists: Artist[]
  albumMeta: Artist
}

interface Artist {
  id: number
  name: string
}

interface H {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

interface Al {
  id: number
  name: string
  picUrl?: string
  tns: string[]
  picStr: string
  pic: number
}

interface Ar {
  id: number
  name: string
  tns: any[]
  alias: any[]
}

interface Creator {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: any
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail: AvatarDetail
  anchor: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
}

interface AvatarDetail {
  userType: number
  identityLevel: number
  identityIconUrl: string
}

interface Subscriber {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags?: any
  experts?: any
  djStatus: number
  vipType: number
  remarkName?: any
  authenticationTypes: number
  avatarDetail?: any
  anchor: boolean
  avatarImgIdStr: string
  backgroundImgIdStr: string
}
