import {NextPage} from 'next'
import styles from './layout.module.scss'
import clsx from 'clsx'
import { ReactNode } from 'react'

type props = {
 children: ReactNode
}

const Layout: NextPage<props> = ({children}) => {
	return (
 <div className={clsx(styles.container)}>
  {children}
 </div>
 )}

export default Layout