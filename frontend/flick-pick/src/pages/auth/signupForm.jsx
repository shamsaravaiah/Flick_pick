import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added Link import
import AuthLayout from "../../components/layout/AuthLayout";
import ProfilePhotoSelector from "../../components/input/ProfilePhotoSelector";
import AuthInput from "../../components/input/AuthInput"; // Added AuthInput import

const SignUpForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validation logic
    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!username) {
      setError("Please enter a username.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError(null);

    // Simulate API call
    try {
      console.log("Sign-up successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AuthInput
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />

            <AuthInput
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="email"
            />

            <AuthInput
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              label="Username"
              placeholder="@johndoe"
              type="text"
            />

            <AuthInput
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button
                type="submit"
                className="w-full text-sm font-medium text-white shadow-lg p-[10px] rounded-md my-1 transition-all duration-200 ease-in-out hover:opacity-90"
                style={{ backgroundColor: "#fec51a" }}
              >
                CREATE ACCOUNT
          </button>
          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link
                to="/signup"
                className="font-medium underline"
                style={{ color: "#fec51a" }}          >
                Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpForm;