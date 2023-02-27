import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log({ ...register("email") });
    reset();
  };

  return (
    <div className="center">
    <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="txt_field">
          <input
            type="text"
            placeholder="Enter your email address"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email is not valid",
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          {errors.email?.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="txt_field">
          <input
            type="password"
            name="password"
            placeholder="Enter your password!"
            {...register("password", {
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters.",
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>
        <div className="pass">Forgot Password?</div>
        <button type="submit">Login</button>
        <div className="signup_link">
          Don't have an account? <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
