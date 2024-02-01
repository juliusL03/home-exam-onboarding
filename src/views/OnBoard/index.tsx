import {NextPage} from 'next'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Layout from '@/components/Layout'
import styles from './onBoard.module.scss'
import clsx from 'clsx'

type props = {
 data: any | undefined
}

const OnBoard: NextPage<props> = ({data}) => {
 const { width, height } = useWindowSize()
 const {firstName} = data

	return (
  <Layout>
   <Confetti
      width={width}
      height={height}
    />
   <h1 className={clsx(styles.h1)}>🥳🎉 Congratulations {firstName} 🎉🥳</h1>
  </Layout>
 )}

export default OnBoard