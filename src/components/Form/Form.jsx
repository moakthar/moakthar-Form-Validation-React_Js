import React from "react";
import {
  FormContainer,
  StyledInput,
  SubmitButton,
  ErrorText,
} from "./Form.styles";

const Form = ({ formik }) => {
  return (
    <FormContainer>
      <h2>Sign Up Here</h2>
      <form onSubmit={formik.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="First Name..."
          name="firstname"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstname && formik.errors.firstname && (
          <ErrorText>{formik.errors.firstname}</ErrorText>
        )}

        <StyledInput
          type="text"
          placeholder="Last Name..."
          name="lastname"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastname && formik.errors.lastname && (
          <ErrorText>{formik.errors.lastname}</ErrorText>
        )}

        <StyledInput
          type="email"
          placeholder="Email..."
          name="email"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorText>{formik.errors.email}</ErrorText>
        )}

        <StyledInput
          type="password"
          placeholder="Password..."
          name="password"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorText>{formik.errors.password}</ErrorText>
        )}

        <StyledInput
          type="password"
          placeholder="Confirm Password..."
          name="confirmpassword"
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword && (
          <ErrorText>{formik.errors.confirmpassword}</ErrorText>
        )}

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Form;
