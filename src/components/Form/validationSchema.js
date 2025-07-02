import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape({
  firstname: Yup.string()
    .max(8, "Must be 8 characters or less")
    .required("Required"),
  lastname: Yup.string()
    .max(5, "Must be 5 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(5, "Minimum of 5 characters")
    .max(8, "Maximum of 8 characters")
    .required("Required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
