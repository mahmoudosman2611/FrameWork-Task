import { useFormik } from "formik";

import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  const passwordRegex = /^[A-Za-z0-9]{6,}$/;

  const schema = yup.object({
    name: yup
      .string()
      .required("Name is Required")
      .min(3, "Name must be more than 3 characters")
      .max(20, "Name must be less than 20 characters"),
    age: yup
      .string()
      .required("age is Required")
      .min(2, "Name must be more than 2 Number")
      .max(2, "Name must be less than 2 Number"),
    email: yup.string().required().email().matches(emailRegex),
    password: yup.string().required().matches(passwordRegex),
    phone: yup.string().required().matches(phoneRegex),
  });

  function signup() {
    console.log("signed up");
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: signup,
  });

  return (
    <>
      <div className="container py-7 px-3">
        <div className=" flex items-center justify-center flex-col text-center ">
          <div className="homeText text-[#2C3E50] space-y-5">
            <h2 className="lg:text-4xl text-2xl capitalize font-bold">
              ABOUT COMPONENT
            </h2>
            <div className="before:w-20 before:h-1 before:absolute relative before:bg-[#2C3E50] before:left-5 lg:before:left-20 before:bottom-3 after:w-20 after:h-1 after:absolute  after:bg-[#2C3E50] lg:after:left-50 after:left-35 after:bottom-3 ">
              <FontAwesomeIcon icon={solid.faStar} className=" text-xl " />
            </div>
          </div>
        </div>

        <form className="space-y-3 my-4" onSubmit={formik.handleSubmit}>
          <div className="name">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="text-white font-semibold m-1 bg-[#2C3E50] rounded-md px-2 py-1">
                {formik.errors.name}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="age">
            <input
              type="number"
              className="form-control"
              placeholder="Your age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age ? (
              <p className="text-white font-semibold m-1 bg-[#2C3E50] rounded-md px-2 py-1">
                {formik.errors.age}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="email">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="text-white font-semibold m-1 bg-[#2C3E50] rounded-md px-2 py-1">
                {formik.errors.email}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="password">
            <input
              type="password"
              className="form-control"
              placeholder="Your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-white font-semibold m-1 bg-[#2C3E50] rounded-md px-2 py-1">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="phone">
            <input
              type="tel"
              className="form-control"
              placeholder="Your phone Number"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="text-white font-semibold m-1 bg-[#2C3E50] rounded-md px-2 py-1">
                {formik.errors.phone}
              </p>
            ) : (
              ""
            )}
          </div>
          <button
            className="btn bg-[#2C3E50] text-white disabled:bg-gray-600 disabled:text-gray-400 "
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </>
  );
}
