import React from "react";
import UI_ELEMENT from "../../assets/images/triangle_ui.png"; // Adjust the path as needed
import CARD_1 from "../../assets/images/card-4.png"; // Adjust the path as needed
import CARD_2 from "../../assets/images/card-2.png"; // Adjust the path as needed
import CARD_3 from "../../assets/images/card-3.png"; // Adjust the path as needed

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-1/2 px-12 pt-8 pb-12">
        <h2 className="text-lg font-medium text-black">Flick Pick</h2>
        {children}
      </div>
      <div className="hidden md:block w-1/2 h-screen bg-sky-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden relative">
        {/* Triangle UI elements */}
          
        <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-xl font-semibold text-blue-900">
            Decide what to watch, the easy way.
          </p>
        </div>

          <img
            src={UI_ELEMENT}
            className="w-[50%] -rotate-90 absolute right-0 -top-16 scale-x-[-1]"
          />
          <img
            src={UI_ELEMENT}
            className="w-[55%] rotate-90 absolute left-0 -bottom-[26%]"
          />

          {/* Cards covering triangle tips */}
          <img
            src={CARD_1}
            className="w-28 lg:w-32 absolute top-[3.5%] left-[18%] shadow-lg shadow-blue-400/15"
          />
          <img
            src={CARD_2}
            className="w-28 lg:w-32 absolute top-[34%] left-[74%] shadow-lg shadow-blue-400/15"
          />
          <img
            src={CARD_3}
            className="w-28 lg:w-32 absolute top-[73%] left-[18%] shadow-lg shadow-blue-400/15"
          />





      </div>
    </div>
  );
};

export default AuthLayout;
