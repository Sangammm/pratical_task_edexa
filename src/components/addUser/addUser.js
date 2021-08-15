import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "../datePicker/datePicker";
import FormItem from "../formIItem/formItem";

const AddUser = ({ onAddUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const onSuccess = (data) => {
    onAddUser({ id: Date.now(), ...data });
    reset({});
  };

  return (
    <div className="formContainer">
      <h3>Add User</h3>
      <form onSubmit={handleSubmit(onSuccess, (e) => console.log(e))}>
        <FormItem>
          <label>Profile Photo</label>
          <input
            accept="image/*"
            type="file"
            placeholder="profile"
            {...register("profile")}
          />
          {errors.file && <span>{errors.file.message}</span>}
        </FormItem>
        <FormItem>
          <label>Name</label>
          <input
            placeholder="Name"
            {...register("name", {
              required: { value: true, message: "Name is required" },
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </FormItem>
        <FormItem>
          <label>Address</label>
          <input placeholder="Address" {...register("address")} />
          {errors.address && <span>{errors.address.message}</span>}
        </FormItem>

        <FormItem>
          <label>Birth Date</label>
          <DatePicker
            placeHolder="Enter Birth Date"
            control={control}
            name="age"
          />
          {errors.age && <span>{errors.age.message}</span>}
        </FormItem>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
