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
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-screen flex flex-col justify-center items-center "
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default ContactUs;
