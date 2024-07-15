import { useState } from "react";
import { Link } from "react-router-dom";
const Signin = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleShowPassword = (e) => {
    e.stopPropagation();
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      alert("short password");
    } else {
      console.log(formData);
    }
  };

  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-black pt-10 pb-6 px-6">
        <h2 className="text-4xl mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label className="text-sm text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-black px-3 py-1 w-[300px]"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm text-gray-500" htmlFor="email">
              Password
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="border border-black px-3 py-1 w-[300px]"
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password here"
            />
          </div>
          <div className="flex gap-1">
            <input
              onChange={handleShowPassword}
              className="cursor-pointer"
              checked={showPass}
              type="checkbox"
              name="show-password"
              id="show-password"
            />
            <label className="text-sm text-gray-700" htmlFor="show-password">
              Show password
            </label>
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-zinc-900 duration-300 text-white w-full mt-2 py-2"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-800 mt-1">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500 ">
            <Link to={"/sign-up"}>Sign up here!</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
