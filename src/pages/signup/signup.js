import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FormItem from "../../components/formIItem/formItem";
import { allRoutes } from "../../routes";
import "./signup.scss";
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const passwordValue = watch("password");

  const onSubmit = (values) => {
    localStorage.setItem("email", values.email);
    history.replace(allRoutes.home.path);
  };

  return (
    <div className="formContainer">
      <h3>Signup</h3>
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
        <FormItem>
          <input
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === passwordValue ||
                "Confirm Password must be same as password",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </FormItem>

        <button type="submit">Submit</button>
      </form>
      <Link to={allRoutes.login.path}>Login</Link>
    </div>
  );
};

export default Signup;
