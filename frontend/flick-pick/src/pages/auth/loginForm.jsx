import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/layout/AuthLayout";
import AuthInput from "../../components/input/AuthInput"; 
import { Link } from "react-router-dom"; 
import { validateEmail } from "../../utils/helper"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter valid email address");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }
    setError("");
    // login api 
    try {

    } catch (err) {
     
    }

  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <AuthInput
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          
          <AuthInput
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="min 8 characters"
            type="password"
          />
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button
                type="submit"
                className="w-full text-sm font-medium text-white shadow-lg p-[10px] rounded-md my-1 transition-all duration-200 ease-in-out hover:opacity-90"
                style={{ backgroundColor: "#fec51a" }}
              >
                LOGIN
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-medium underline"
                style={{ color: "#fec51a" }}
              >
                SignUp
              </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
