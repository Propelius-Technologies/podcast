import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EmailField = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const onClickHandler = async (e: React.FormEvent<HTMLInputElement>) => {
    e?.preventDefault();
    setLoading(true);
    let regEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (regEmail.test(email)) {
      const data = await fetch("/api/subscribe");
      const response = await data.json();
      toast.success(response.message, {
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } else {
      toast.error("Please Check your email", {
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
    setLoading(false);
  };
  return (
    <div>
      <ToastContainer />
      <form>
        <div className=" relative flex w-[90%] flex-col md:flex md:flex-row my-10  lg:justify-center md:justify-center">
          <input
            className="hero__form__mobile md:hero__form focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email Address"
          />
          <CustomButton
            loading={loading}
            onClickHandler={onClickHandler as () => Promise<void>}
          />
        </div>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default EmailField;
