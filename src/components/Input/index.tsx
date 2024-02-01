import styles from './input.module.scss'
import clsx from 'clsx'

type props = {
 label: string
 type: string
 register?: any
 errors?: any
 placeholder?: string

}
const InputField: React.FC<props> =({label, type, register, errors, placeholder}) => {
 return (
 <div className={clsx(styles.wrap)}>
  <label className={clsx(styles.label)}>{label}</label>
  <input
  className={clsx(styles.input)}
  type={type}
  {...register}
  placeholder={placeholder}
  />
  {errors && <p className={styles.error}>{errors}</p>}
 </div>
 )
}

export default InputField