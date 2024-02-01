import styles from './button.module.scss'
import clsx from 'clsx'

type props = {
 label: string
 type: "submit" | "reset" | "button" | undefined
}

const Button: React.FC<props> =({label, type}) => {
 return (
 <button type={type} className={clsx(styles.button)}>{label}</button>
 )
}

export default Button