import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Too short')
    .max(1000, 'Too long!')
    .required('Password is required')
})