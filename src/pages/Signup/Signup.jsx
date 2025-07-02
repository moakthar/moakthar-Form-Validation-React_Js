import React, { useState } from "react";
import { useFormik } from "formik";
import Popup from "../../components/Popup/Popup";
import Form from "../../components/Form/Form";
import { signupValidationSchema } from "../../components/Form/validationSchema";

const Signup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values, { resetForm }) => {
      setShowPopup(true);
      console.log(values);
      resetForm();
    },
  });

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="signup-container">
      <Form formik={formik} />
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};

export default Signup;
