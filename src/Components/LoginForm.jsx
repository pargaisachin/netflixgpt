import React from "react";

const LoginForm = () => {
  return (
    <div className="absolute   h-4/5 w-4/12 bg-gradient-to-b from-stone-950 bg-[#000]/[0.7]">
      {/* header */}
      <div>
      <p className="text-white text-2xl mt-8 font-bold pl-12">Sign In</p>
      </div>

      {/* form */}
      <form className="flex flex-col w-4/5 mt-6 mx-auto ">
       
        <input className=" p-2 rounded-sm m-2 bg-gray-500 opacity-6 text-white" placeholder="Email or Phone number"></input>
        <input className="p-2 rounded-sm m-2 bg-gray-500 opacity-6 text-white" placeholder="Password"></input>
        <button className="bg-red-800 p-2 m-2 rounded-sm">Sign In</button>
        <p className="text-white text-lg font-bold mx-auto">Forget Password</p>
      </form>
      
      

      {/* footer */}
      <div>

      <p className="text-white text-l mt-10 ml-2 font-bold">New to Netflix? Sign up now.</p>
      </div>
    </div>
  );
};

export default LoginForm;
