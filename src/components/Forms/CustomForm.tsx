import { useForm } from 'react-hook-form'
import styles from './styles.module.scss'
import clsx from 'clsx'
import InputField from '../Input'
import Button from '../Button'
import { useRouter } from 'next/router'

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const CustomForm: React.FC = () => {
 const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
   const {firstName,  lastName, email} = data
   router.push({
    pathname: '/onboard',
    query: {firstName, lastName, email},
  })
 };

 const validatePassword = (value: string) => {
  const minLength = value.length >= 12;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  return (
    minLength &&
    hasSpecialChar &&
    hasUppercase &&
    hasLowercase ||
    'Password must have 1 special char, 1 capital 1 and 1 small letter.'
  )
}

const validatePasswordMatch = (value: string, otherValue: string) => {
 const minLength = value.length >= 12;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  
  if (!minLength && !hasSpecialChar && !hasUppercase && !hasLowercase) {
    return 'Password must have 1 special char, 1 capital 1 and 1 small letter.'
  }
  
  return value === otherValue || 'Passwords do not match';
}

  const fields = [{
   label:  "First Name",
   type:  "text",
   register: register('firstName', { maxLength: 100 }),
   placeholder: 'Enter first name',
   errors: errors.firstName?.message
  },
  {
   label:  "Last Name",
   type:  "text",
   register: register('lastName', { maxLength: 100 }),
   placeholder: 'Enter last name',
   errors: errors.lastName?.message
  },
  {
   label:  "Email",
   type:  "email",
   register: register('email', {
    required: 'Email is required',
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Please enter a valid email address.',
    },
  }),
   placeholder: 'Enter email name',
   errors: errors.email?.message
  },
  {
   label:  "Password",
   type:  "password",
   register: register('password', {
    required: 'Password is required',
    minLength: { value: 12, message: 'Password must be at least 12 characters long' },
    validate: validatePassword,
  }),
   placeholder: 'Enter password',
   errors: errors.password?.message
  },
  {
   label:  "Confirm Password",
   type:  "password",
   register: register('confirmPassword', {
    required: 'Confirm Password is required',
    minLength: { value: 12, message: 'Password must be at least 12 characters long' },
    validate: (value) => validatePasswordMatch(value, watch('password')),
  }),
   placeholder: 'Enter confirm password',
   errors: errors.confirmPassword?.message
  },
 ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(styles.form)}>
     {fields.map(field => (
      <InputField
      key={field.label}
      label={field.label}
      type={field.type}
      placeholder={field.placeholder}
      register={field.register}
      errors={field.errors}
      />
     ))}
      <Button label='Submit' type='submit' />
    </form>
  );
};

export default CustomForm