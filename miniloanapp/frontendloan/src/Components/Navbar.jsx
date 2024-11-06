import React from "react";

const Navbar = () => {
  const url =
    "https://png.pngtree.com/png-clipart/20200720/original/pngtree-help-cash-out-debt-finance-loan-flat-business-logo-template-png-image_4351326.jpg";

  return (
    <>
      <div className="flex justify-between bg-slate-500 h-full w-full">
        <div className="pl-4 pt-2 pb-2">
          <p className="h-12 w-12">
            <img src={url} alt="" />
          </p>
        </div>
        <div className="flex mt-4">
          <p className="pr-4 pl-4 font-bold text-xl hover:pt-1 cursor-pointer">
            Dasktop
          </p>
          <p>|</p>
          <p className="pr-4 pl-4 font-bold text-xl hover:pt-1 cursor-pointer">
            Total Loan
          </p>
          <p>|</p>
          <p className="pr-4 pl-4 font-bold text-xl hover:pt-1 cursor-pointer">
            Calculated
          </p>
        </div>
        <div className="flex mt-4">
          <div className="pr-4 pl-4 cursor-pointer">SingIn</div>
          <div className="pr-4 pl-4 cursor-pointer">Login</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
