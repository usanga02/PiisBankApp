import axios, { AxiosError } from 'axios';
import { stringify } from 'querystring';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../Siderbar/Sidebar';

const baseURL = "http://localhost:4000/Accounts/addAccount";

type FormData = {
AccountName: string;
account_Number: number;
  pin: number;
  balance: number;
};

export default function NewAccount() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      // Get the user's token from wherever it is stored (e.g., localStorage)
      const access_token = localStorage.getItem('access_token');

      // Convert pin and balance to numbers
      const requestData = {
        ...data,
        pin: Number(data.pin),
        balance: Number(data.balance),
        account_Number: Number(data.account_Number),
        AccountName: String(data.AccountName),
      };

      const response = await axios.post(baseURL, requestData, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      console.log(response.data);
      const id = response.data.id;
      localStorage.setItem("id", id);

      navigate('/dashboard');
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log(axiosError.response.data);
      }
    }
  };

  return (
    <div className='Appp'>
      <div className='AppGlass'>
        <Sidebar />
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray mt-2 mx-auto w-2/3'>
      <h1 className='text-3xl font-semibold'>Create Account</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome! Create your Account
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-6'>
          <label className='text-lg font-medium'>
            Account Name
            <input
                type='text'
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your account name'
              {...register('AccountName', { required: 'Account name is required' })}
            />
          </label>
          {errors.AccountName?.message && <p className='text-red-500'>{errors.AccountName.message}</p>}
        </div>
        <div className='mt-6'>
          <label className='text-lg font-medium'>
            Account Number
            <input
             type='number'
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your account number'
              {...register('account_Number', { required: 'Account number is required' })}
            />
          </label>
          {errors.account_Number?.message && <p className='text-red-500'>{errors.account_Number.message}</p>}
        </div>
        <div className='mt-6'>
          <label className='text-lg font-medium'>
            PIN
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your PIN'
              type='number'
              {...register('pin', {
                required: 'PIN is required',
                minLength: {
                  value: 4,
                  message: 'PIN must be at least 4 characters long',
                },
              })}
            />
          </label>
          {errors.pin?.message && <p className='text-red-500'>{errors.pin.message}</p>}
        </div>
        <div className='mt-6'>
          <label className='text-lg font-medium'>
            Opening Balance
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-gray-100 placeholder-gray-400::placeholder text-sm'
              placeholder='Enter your opening balance'
              type='number'
              {...register('balance', { required: 'Opening balance is required' })}
            />
          </label>
          {errors.balance?.message && <p className='text-red-500'>{errors.balance.message}</p>}
        </div>
        <div className='mt-6 flex flex-col gap-y-4'>
          <button type='submit' className='active:scale-[.98] text-center active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>
            Create Account
          </button>
        </div>
        <div className='mt-4 flex justify-center items-center'>
          <p className='font-medium text-base'>Already have an account?</p>
          <Link to='/signin' className='text-violet-500 text-base font-medium ml-2'>
            Sign in
          </Link>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}
