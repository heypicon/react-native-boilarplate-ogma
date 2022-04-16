import * as yup from "yup";

const SigninSchema = yup.object({
  email: yup.string().required("Please provide an email"),
  password: yup.string().required("Please provide an password"),
});

export default SigninSchema;