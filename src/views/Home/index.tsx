
import {NextPage} from 'next'
import Layout from '@/components/Layout'
import CustomForm from '@/components/Forms/CustomForm'
import styles from './home.module.scss'
import clsx from 'clsx'

const Home: NextPage = () => {
	return (
  <Layout>
   <h1 className={clsx(styles.h1)}>Wecome to Onboarding Form</h1>
   <CustomForm />
  </Layout>
 )}

export default Home