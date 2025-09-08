import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex h-screen md:flex-row bg-[#ECBA1D]">
      {/* left section  */}
      <div className="w-full md:w-1/2 md:h-full flex flex-col  pt-4 relative pb-0 pl-0">
        <div className="flex flex-col pt-16 pl-16  justify-center">
          <h1 className="text-white text-[90px] [text-shadow:3px_3px_8px_rgba(0,0,0,0.4)] mb-1">
            CookieCall
          </h1>
          <p className="text-[24px] text-[#6F2105] -mt-4 font-bold pl-2">
            One call closer to your meal.
          </p>
        </div>

        <Image
          src="/images/welcomeChick.png"
          alt=""
          width={650}
          height={960}
          className=" absolute -bottom-44 -left-20"
        />
      </div>

      {/* right section */}
      <div className="w-full md:w-1/2 md:h-full pt-8x pb-8 pl-12 pr-12 flex justify-center items-center">
        <div className="h-3/4 max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-2xl w-3/4 flex flex-col p-4 shadow-[-36px_38px_4px_#EE9B21]">
          <h1 className="text-center text-amber-800 text-4xl font-bold mb-12">
            Login
          </h1>

          <div className="flex flex-col gap-8 ">
            <div className=" pl-4 pr-4 flex flex-col gap-1">
              <label htmlFor="email" className="text-black">
                Email
              </label>
              <input
                type="email"
                id="email"
                className=" rounded-md h-11 border-1 border-zinc-300 text-black p-2"
              />
            </div>

            <div className=" pl-4 pr-4 flex flex-col gap-1">
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-md h-11 border-1 border-zinc-300 text-black p-2"
              />
              <div className="flex flex-col ">
              <p className="text-amber-700 font-bold ">
                <a href="">Forgot Password?</a>
              </p>
            </div>
            </div>
            

            <div className="pl-4 pr-4 flex flex-col gap-2">
              <button className="flex justify-center items-center bg-[#c43860] w-full h-12 rounded-md font-bold">
                Log In
              </button>
              <div>
                <p className="text-[#5d5c5c] text-center">Or continue with</p>
              </div>

              <div className="flex gap-6 justify-center mt-4">
                <div className="bg-zinc-300 rounded-full h-14 w-14"></div>
                <div className="bg-zinc-300 rounded-full h-14 w-14"></div>
                <div className="bg-zinc-300 rounded-full h-14 w-14"></div>
              </div>
              <div>
                <p className="text-[#5d5c5c] text-center">Don't have an account? <a className="text-amber-800 font-bold" href="">Sign Up here</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
