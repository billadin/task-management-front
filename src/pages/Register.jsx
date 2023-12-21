import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../Components";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FirebaseErrorMessage } from "../utils";

const Register = () => {
  const { createUser, loggingWithGoogle, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { email, password } = data;

    // Validations
    if (!email || !password) {
      toast.error("Please complete the form");
      return;
    }
    if (password.length < 8) {
      toast.error("Password cannot be less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Please add at least one uppercase letter in password");
      return;
    } else if (!specialCharacter.test(password)) {
      toast.error("Please add at least one special character in password");
      return;
    }

    //Creating user using firebase auth
    try {
        await createUser(email, password)
        toast.success('Account created successfully');
        navigate('/');
      } catch (error) {
          toast.error(FirebaseErrorMessage(error));
          setLoading(false)
          navigate('/register')
      }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await loggingWithGoogle();
      console.log(res);
      toast.success("Logged in successfully");
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      toast.error(FirebaseErrorMessage(error));
      setLoading(false);
      navigate("/register");
    }
  };

  return (
    <section className="h-screen grid place-items-center bg-slate-50">
      <div className="card w-96 px-12 drop-shadow-2xl bg-white rounded-[4px]">
        <Form
          onSubmit={handleRegister}
          method="post"
          className="pt-8 flex flex-col gap-y-2"
        >
          <h4 className="text-center text-3xl font-bold">Trello</h4>
          <p className="text-center text-xl font-semibold my-4">
            Sign Up to continue
          </p>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email..."
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <div className="mt-4">
            <SubmitBtn text="sign up" />
          </div>
        </Form>

        <div className="my-4">
          <h2 className="text-center">OR</h2>
        </div>

        <div>
          <button
            onClick={handleGoogleLogin}
            type="submit"
            className="btn btn-ghost rounded-[4px] btn-block border border-slate-300"
          >
            Continue with Google
          </button>
        </div>
        <p className="text-center my-4">
          Already a member?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>

        <hr className="h-1" />

        <div className="text-center my-8 space-x-2">
          <h2 className="font-semibold text-xl mb-2">Task</h2>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
