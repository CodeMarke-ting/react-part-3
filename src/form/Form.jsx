import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="fullName"
        {...register("fullName", { required: true })}
      />
      <br />
      <input
        type="number"
        defaultValue={0}
        {...register("age", { required: true, min: 0, max: 160 })}
      />
      <br />
      {errors.fullName && (
        <>
          <span>TName is required</span> <br />
        </>
      )}
      <br />
      {errors.age?.type === "required" && (
        <>
          <span>Age is required</span> <br />
        </>
      )}
      {errors.age?.type === "min" && (
        <>
          <span>Invalid age format</span> <br />
        </>
      )}

      <input type="submit" />
    </form>
  );
}
