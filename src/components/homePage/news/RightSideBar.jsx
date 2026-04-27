import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const RightSideBar = () => {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-6">Login with</h3>
      <div className="flex flex-col gap-2">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn border-gray-800 ">
          <FaGithub />
          Login with Github
        </button>
      </div>

      <h3 className="font-semibold text-xl mt-8 mb-6">Find Us On</h3>
      <div className="flex flex-col gap-2">
        <button className="btn  bg-transparent">
          <FaFacebookF className="text-blue-500" />
          Facebook
        </button>
        <button className="btn bg-transparent">
          <FaTwitter className="text-blue-500" />
          Twitter
        </button>
        <button className="btn bg-transparent">
          <FaInstagram className="text-red-500" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
