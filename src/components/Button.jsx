import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins text-primary font-medium text-[18px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}

export default Button;
