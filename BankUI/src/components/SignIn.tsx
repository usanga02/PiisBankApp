import * as React from 'react';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const baseURL = "http://localhost:4000/auth/signin";

type FormData = {
    email: string;
    password: string;
  };
  


export default function SignIn() {
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    
      const onSubmit = async (data: FormData) => {
        try {
          const response = await axios.post(baseURL, data);
          console.log(response.data);
    
          const access_token = response.data.access_token;
          const userId = response.data.userId;
          localStorage.setItem("userId", userId);
          localStorage.setItem("access_token", access_token);
          
          navigate('/createAccount');
    
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            console.log(axiosError.response.data);
          }
        }
      };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray'>
      <h1 className='text-4xl font-semibold'>Sign In</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome back! Please sign in
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Email
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your email'
              type='email'
              {...register('email', { required: 'Email is required' })}
            />
          </label>
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Password
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your password'
              type='password'
              {...register('password', { required: 'Password is required',
              minLength:{
                value:4,
                message: 'Password must be at least 4 characters long',
              },
              pattern: {
                value: /^(?=.*[!@#$%^&]).{4,}$/,
                message: 'Password must contain a special character',
              }
             })}
            />
          </label>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember' className='ml-2 font-medium text-base'>
              Remember me
            </label>
          </div>
          <button className='font-medium text-base text-violet-500'>
            Forgot Password
          </button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4 '>
          <button className=' text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>
            Sign in
          </button>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Don't have an account?</p>
          <Link to='/SignUp' className='text-violet-500 text-base font-medium ml-2' type='submit'>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
  }

