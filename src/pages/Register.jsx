import React from 'react'
import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../Components';

const Register = () => {
    const handleRegister = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const { username, email, password, img } = data;
    }

    const handleGoogleLogin = async () => {};

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
  )
}

export default Register;