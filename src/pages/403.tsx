import Button from '@/components/Button'
import Layout from '@/components/Layout'
import {useRouter} from 'next/router';
import {NextPage} from 'next'
import styles from './pages.module.scss'
import clsx from 'clsx';

const _403: NextPage = () => {
 const router = useRouter()

 const onButtonHandler = () => {
  return router.push({pathname: '/home'})
 }
	return (
  <Layout>
   <h1 className={clsx(styles.h3)}>Unauthorize Access</h1>
   <p className={clsx(styles.h3)}>You do not have permission to view this page.</p>
   <h3 className={clsx(styles.h3)}>Please fill up the Onboarding form...</h3>
   <Button label={'Go back'} type='button' onClick={onButtonHandler}/>
  </Layout>
 )
}

export default _403