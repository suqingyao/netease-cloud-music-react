import Loading from '@/components/loading'
import Scroll from '@/components/scroll'
import { useRank } from '@/hooks'
import GlobalRank from './components/GlobalRank'
import OfficialRank from './components/OfficialRank'

function Rank() {
  const { data, isLoading } = useRank()

  if (isLoading) {
    return <Loading />
  }

  const officialList = data?.list?.filter((item: any) => item.ToplistType)

  const globalList = data?.list?.filter((item: any) => !item.ToplistType)

  return (
    <div>
      <Scroll wrapHeight="calc(100vh - 7.5rem)" direction={'vertical'}>
        <OfficialRank list={officialList} />
        <GlobalRank list={globalList} />
      </Scroll>
    </div>
  )
}

export default Rank
