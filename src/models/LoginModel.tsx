import * as yup from 'yup';

export const LoginSchema = yup.object({
    email: yup.string()
        .email("*Please input a valid email!")
        .required("*Please input email!"),
    password: yup.string()
        .required("*Please input password!"),
});

export type ILogin = yup.InferType<typeof LoginSchema>;