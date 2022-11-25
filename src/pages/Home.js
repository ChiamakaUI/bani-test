import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Home = () => {
   
    const schema = yup
    .object({
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(6).max(15).required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

    const goToDashboard = (data) => {
        console.log(data)
        navigate('/dashboard')
    }
  return (
    <div className="bg-[#F5F6FA] w-screen h-screen">
      <div className="w-[30%] h-[75%] mx-auto py-10 flex flex-col items-center justify-between">
        <img src="/assets/bani.png" alt="logo" className="mb-12" />
        <div className="bg-[#fff] p-6 border h-[95%] flex flex-col items-center rounded-lg">
            <div className="w-[93%] h-[20%]">
            <h5 className="text-2xl font-medium">Log in to your account</h5>
          <p className="text-base font-normal">
            Don’t have an account?{" "}
            <span className="text-[#5444F2]">Get Started</span>
          </p>
            </div>
          
          <form className="flex flex-col items-center p-3 h-[80%] justify-between w-full"  onSubmit={handleSubmit(goToDashboard)}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="E.g: victor.onazi@getbani.co"
                className="w-[362px] border h-[44px] rounded-lg border-[#E1E1E1] bg-[#fff] p-2"
                {...register("email")}
              />
            </label>
            <p className="font-medium text-xs text-red-500 my-1"> {errors.email?.message} </p>
            <label>
              Password:
              <input 
               type="password" 
               placeholder="Password" 
               name="password"
               className="w-[362px] border h-[44px] rounded-lg border-[#E1E1E1] bg-[#fff] p-2"
               {...register("password")}
              />
            </label>
            <p className="font-medium text-xs text-red-500 my-1"> {errors.password?.message} </p>
            <button className="font-sm font-medium bg-[#5444F2] w-[362px] border h-[44px] rounded-lg text-[#fff]">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
