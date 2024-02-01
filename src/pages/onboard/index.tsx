import OnBoard from '@/views/OnBoard'
import {NextPage} from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const OnBoardPage: NextPage = () => {
 const router = useRouter()
 const data = router.query

 useEffect(() => {
   if(!Object.values(data).length) {
    router.push({
     pathname: '/403',
   })
   }
 }, [data, router])
 
	return (
  <OnBoard data={data} />
 )
}

export default OnBoardPage