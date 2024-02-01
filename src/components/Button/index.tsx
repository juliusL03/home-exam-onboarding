import styles from './button.module.scss'
import clsx from 'clsx'

type props = {
 label: string
 type: "submit" | "reset" | "button" | undefined
 onClick?: () => void
}

const Button: React.FC<props> =({label, type, onClick}) => {
 return (
 <button 
 type={type} 
 className={clsx(styles.button)}
 onClick={onClick}
 >{label}</button>
 )
}

export default Button