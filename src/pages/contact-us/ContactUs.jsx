import React from "react";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <h1>
        Love to hear from you
        <br />
        Get in touch 👋
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5 "
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="test1">Name</label>
        <input
          id="test1"
          {...register("username", { required: "username is required" })}
          placeholder="Enter your Name ..."
          className="border-2 rounded-lg px-2 py-1"
        />
        {errors.username && (
          <p className="text-red-400">{errors.username.message}</p>
        )}

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="test1">Password</label>
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 10,
              message: "Password must be at least 10 charchters",
            },
          })}
          placeholder="Enter your Password ..."
          className="border-2 rounded-lg px-2 py-1"
        />
        {/* errors will return when field validation fails  */}
        {errors.password && (
          <p className="text-red-400">{errors.password.message}</p>
        )}

        <input
          {...register("confirmPassword", {
            required: "confirmPassword is required",
            validate: (value) =>
              value === getValues("password") || "Password must match",
          })}
          placeholder="confirm your Password ..."
          className="border-2 rounded-lg px-2 py-1"
        />
        {/* errors will return when field validation fails  */}
        {errors.confirmPassword && (
          <p className="text-red-400">{errors.confirmPassword.message}</p>
        )}

        <input
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg px-4 py-1 bg-orange-500"
        />
      </form>
    </>
  );
}

export default ContactUs;
