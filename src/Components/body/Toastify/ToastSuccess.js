import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ToastSuccess = () => {
  const notifySuccess = () => toast("Mail has been sent successfully.!");

  return (
    <div>
      <button onClick={notifySuccess}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default ToastSuccess;
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

toast.success('🦄 Wow so easy!', {
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

toast.success('🦄 Wow so easy!', {
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
