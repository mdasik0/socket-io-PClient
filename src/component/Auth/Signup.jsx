import { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    userName: "",
  });
  const handleShowPassword = (e) => {
    e.stopPropagation();
    setShowPass(!showPass);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.password.length < 8) {
      return alert("password must be at least 8 characters")
    }
    if (formData.password !== formData.confirmPassword) {
       return alert("password didn't matched");
    }
  };

  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-black pt-10 pb-6 px-6">
        <h2 className="text-4xl mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <label className="text-sm text-gray-500" htmlFor="userName">
              UserName
            </label>
            <input
            autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              className="border border-black px-3 py-1 w-[300px]"
              type="userName"
              name="userName"
              id="userName"
              placeholder="Enter your userName here"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-sm text-gray-500" htmlFor="email">
              Email
            </label>
            <input
            autoComplete="off"
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
            <label className="text-sm text-gray-500" htmlFor="password">
              Password
            </label>
            <input
            autoComplete="off"
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
          <div className="flex flex-col mb-2">
            <label className="text-sm text-gray-500" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
            autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="border border-black px-3 py-1 w-[300px]"
              type={showPass ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Enter your password here"
            />
          </div>
          <div className="flex gap-1">
            <input
            autoComplete="off"
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
            Register
          </button>
        </form>
        <p className="text-sm text-gray-800 mt-1">
          Already have an account?{" "}
          <span className="text-blue-500 ">
            <Link to={"/sign-in"}>Sign in here!</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
