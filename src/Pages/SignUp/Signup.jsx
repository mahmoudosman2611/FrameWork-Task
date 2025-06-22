import { useFormik } from "formik";
import Navbar from "../../Components/Navbar/Navbar";
import * as yup from "yup";

export default function Signup() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  const passwordRegex = /^[A-Za-z0-9]{6,}$/;

  const schema = yup.object({
    name: yup
      .string()
      .required("Name is Required")
      .min(3, "Name must be more than 3 characters")
      .max(20, "Name must be less than 20 characters"),
    email: yup.string().required().email().matches(emailRegex),
    password: yup.string().required().matches(passwordRegex),
    rePassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
    phone: yup.string().required().matches(phoneRegex),
  });

  function signup(values) {
    console.log("signed up");
    console.log(values);
    
  }

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: signup,
  });



  

  return (
    <>
      <Navbar />
      <div className="container py-7 px-3">
        <h1 className="flex items-center gap-2 text-2xl font-semibold">
          Register Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8  text-violet-700 hover:scale-110 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </h1>
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
              <p className="text-violet-950 font-semibold m-1 bg-violet-400 rounded-md p-1">
                {formik.errors.name}
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
              <p className="text-violet-950 font-semibold m-1 bg-violet-400 rounded-md p-1">
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
              <p className="text-violet-950 font-semibold m-1 bg-violet-400 rounded-md p-1">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="re-password">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <p className="text-violet-950 font-semibold m-1 bg-violet-400 rounded-md p-1">
                {formik.errors.rePassword}
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
              <p className="text-violet-950 font-semibold m-1 bg-violet-400 rounded-md p-1">
                {formik.errors.phone}
              </p>
            ) : (
              ""
            )}
          </div>
          <button
            className="btn bg-violet-600 text-white disabled:bg-gray-600 disabled:text-gray-400 hover:bg-violet-800 transition-colors duration-300  "
            disabled={!(formik.isValid && formik.dirty)}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
