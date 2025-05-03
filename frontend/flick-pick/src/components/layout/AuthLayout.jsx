import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-1/2 px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Flick Pick</h2>
        {children}
      </div>
      <div className="hidden md:block w-1/2 h-screen bg-sky-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden relative">
        {/* Add your right-side UI element or background image here */}
      </div>
    </div>
  );
};

export default AuthLayout;
