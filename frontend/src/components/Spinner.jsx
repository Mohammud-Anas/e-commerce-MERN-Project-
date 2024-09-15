import React from "react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50 text-xl font-semibold">
      Processing
      <span className="loading loading-dots loading-md"></span>
    </div>
  );
};

export default Spinner;
