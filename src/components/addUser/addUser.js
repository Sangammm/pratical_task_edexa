import React from "react";
import { useForm } from "react-hook-form";
import FormItem from "../formIItem/formItem";

const AddUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSuccess = (data) => {
    console.log("🚀 ~ data", data);
  };

  return (
    <div className="formContainer">
      <h3>Add User</h3>
      <form onSubmit={handleSubmit(onSuccess)}>
        <FormItem>
          <label>Profile Photo</label>
          <input
            accept="image/*"
            type="file"
            placeholder="profile"
            {...register("profile")}
          />
          {errors.file && <span>{errors.file}</span>}
        </FormItem>

        <FormItem>
          <label>Name</label>
          <input
            placeholder="Name"
            {...register("name", {
              required: { value: true, message: "name is required" },
            })}
          />
          {errors.name && <span>{errors.name}</span>}
        </FormItem>

        <FormItem>
          <label>Address</label>
          <input placeholder="Address" {...register("address")} />
          {errors.address && <span>{errors.address}</span>}
        </FormItem>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
