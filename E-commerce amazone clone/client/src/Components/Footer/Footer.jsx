import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-900 p-7 flex flex-col text-white">
        <div className="flex justify-around ml-36 mr-36">
          <div className="mt-12">
            <p className="font-bold text-xl">Get to Know</p>
            <p className="hover:cursor-pointer hover:underline">About amazon</p>
            <p className="hover:cursor-pointer hover:underline">Careers</p>
            <p className="hover:cursor-pointer hover:underline">
              Press Releases
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Amazon Science
            </p>
          </div>
          <div className="mt-12">
            <p className="font-bold text-xl">Connect with Us</p>
            <p className="hover:cursor-pointer hover:underline">Facebook</p>
            <p className="hover:cursor-pointer hover:underline">Instagram</p>
            <p className="hover:cursor-pointer hover:underline">Twitter</p>
          </div>
          <div className="mt-12">
            <p className="font-bold text-xl">Make Money with Us</p>
            <p className="hover:cursor-pointer hover:underline">
              Sell on Amazon
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Sell under Amazon Accelerator
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Protect and Build Your Brand Supply to Amazon
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Amazon Global Selling
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Become an Affiliate
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Fulfilment by Amazon
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Amazon Pay on Merchants
            </p>
            <p className="hover:cursor-pointer hover:underline">
              Make Money with Us
            </p>
          </div>
          <div className="mt-12">
            <p className="font-bold text-xl">Let Us Help You</p>
            <p className="hover:cursor-pointer hover:underline">Your Account</p>
            <p className="hover:cursor-pointer hover:underline">
              ReCalls and Product Safety Alert
            </p>
            <p className="hover:cursor-pointer hover:underline">
              100% Purchesing Product
            </p>
          </div>
        </div>
        <div className="flex mt-9 justify-center w-full items-center">
          <div className="flex w-1/2 mr-28 justify-end">
            <p>img</p>
          </div>
          <div className="w-1/2 flex justify-start">
            <p className="mr-5">language</p>
            <p className="ml-2">Country</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
