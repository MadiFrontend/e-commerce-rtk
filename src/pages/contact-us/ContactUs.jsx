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
      <h1 className="font-bold text-[2.5rem]">
        Love to hear from you,
        <br />
        Get in touch 👋
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  flex-col items-center gap-5 pt-8"
      >
        <div className="flex justify-between w-[60%] ">
          <div className="flex flex-col gap-2  w-[45%]">
            <label htmlFor="test1">Name:</label>
            <input
              id="test1"
              {...register("username", { required: "Name is required" })}
              placeholder="Enter your Name ..."
              className="bg-slate-100 w-full p-2 "
            />
            {errors.username && (
              <p className="text-red-400">{errors.username.message}</p>
            )}
          </div>

          <div className="flex  flex-col gap-2  w-[45%] ">
            <label htmlFor="test1">Email:</label>
            <input
              {...register("email", {
                required: "Don't keep us hanging, we need your email!",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Oops! Please enter a valid email address.",
                },
              })}
              placeholder="Enter your Email ..."
              className="bg-slate-100 w-full p-2 "
              type="email"
            />
            {errors.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className="flex justify-between w-[60%] ">
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="message">Your message:</label>
            <textarea
              id="message"
              {...register("message", { required: "Your message required" })}
              placeholder="Tell us whatever you want ..."
              className="bg-slate-100 w-full px-5 py-1 "
            />
            {errors.username && (
              <p className="text-red-400">{errors.message.message}</p>
            )}
          </div>
        </div>

        {/* <input
          {...register("confirmPassword", {
            required: "confirmPassword is required",
            validate: (value) =>
              value === getValues("password") || "Password must match",
          })}
          placeholder="confirm your Password ..."
          className="border-2 rounded-lg px-2 py-1"
        />
       
        {errors.confirmPassword && (
          <p className="text-red-400">{errors.confirmPassword.message}</p>
        )} */}

        <input
          type="submit"
          disabled={isSubmitting}
          className=" w-[60%] py-1 bg-orange-500 text-white disabled:bg-slate-800"
        />
      </form>
    </>
  );
}

export default ContactUs;
