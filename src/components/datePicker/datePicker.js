import React from "react";
import { Controller } from "react-hook-form";
import { default as DatePickerComponent } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.scss";
const DatePicker = ({ control, name, placeHolder }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        validate: (value) => {
          if (value && value >= new Date()) {
            return "Invalid Birth Date";
          } else {
            return true;
          }
        },
      }}
      render={({ field: { value, onChange, onBlur, name } }) => (
        <DatePickerComponent
          name={name}
          wrapperClassName="datePicker"
          placeholderText={placeHolder}
          selected={value}
          onBlur={onBlur}
          onChange={(date) => {
            onChange(date);
          }}
        />
      )}
    />
  );
};

export default DatePicker;
