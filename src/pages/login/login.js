import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormItem from "../../components/formIItem/formItem";
import { allRoutes } from "../../routes";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const history = useHistory();

  const onSubmit = (values = {}) => {
    if (values.email !== "demo@demo.com") {
      setError(
        "email",
        { type: "manual", message: "Wrong Email" },
        { shouldFocus: true }
      );
      return;
    } else if (values.password !== "12345678") {
      setError(
        "password",
        { type: "manual", message: "Wrong Password" },
        { shouldFocus: true }
      );
      return;
    }
    localStorage.setItem("email", values.email);
    history.replace(allRoutes.home.path);
  };

  return (
    <div className="formContainer">
      <h3>Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </FormItem>
        <FormItem>
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </FormItem>
        <button type="submit">Submit</button>
      </form>
      <Link to={allRoutes.signup.path}>SignUp</Link>
    </div>
  );
};

export default Login;
