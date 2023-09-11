import React from "react";

const Login = () => {
  return (
    <div className="pt-4">
      <div className=" w-[560px] h-[340px] mx-auto py-8 bg-lime-600 rounded-md">
        <h3 className="text-white text-center text-2xl font-bold">
          Login Member
        </h3>
        <div className="p-8 flex flex-col gap-4">
          <div>
            <input
              className="px-3 py-2 w-full outline-none border-2 rounded"
              type="text"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              className="px-3 py-2 w-full outline-none border-2 rounded"
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="block w-full bg-blue-500 text-white rounded py-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
