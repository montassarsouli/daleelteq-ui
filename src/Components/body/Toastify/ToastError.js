import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastError = () => {
  const notifyError = () =>
    toast("Sorry something wrong happened, please enter a correct email.");

  return (
    <div>
      <button onClick={notifyError}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default ToastError;
// light
/*
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Slide,
/>

toast.error('🦄 Wow so easy!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Slide,
});
*/

// dark
/*
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Slide,
/>

toast.error('🦄 Wow so easy!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
});
*/
