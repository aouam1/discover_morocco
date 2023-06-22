import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form
      className="px-12 py-8  left-1/2 top-1/2 absolute bg-black/30 "
      style={{
        transform: "translate(-50%,-50%)",
      }}
    >
      <h2 class="mb-4 uppercase text-white text-xl font-medium">
        Please login to your account
      </h2>
      <div class="flex flex-row items-center justify-center text-xl lg:justify-start mb-5 ">
        <p class="text-white mb-0 mr-4 text-lg">Login with</p>

        {/* <!-- Facebook --> */}
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mx-1 h-9 w-9 rounded-full  bg-[#00B4E8] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00B4E8] transition duration-150 ease-in-out hover:bg-[#00B4E8]-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#00B4E8]-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#00B4E8]-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {/* <!-- Facebook --> */}
          <FaFacebookF class="mx-auto h-3.5 w-3.5" />
        </button>

        {/* <!-- gmail --> */}
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mx-1 h-9 w-9 rounded-full bg-[#00B4E8] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00B4E8] transition duration-150 ease-in-out hover:bg-[#00B4E8]-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#00B4E8]-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#00B4E8]-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {/* <!-- gmail --> */}
          <BsGoogle class="mx-auto h-3.5 w-3.5" />
        </button>

        {/* <!-- Linkedin --> */}
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="mx-1 h-9 w-9 rounded-full bg-[#00B4E8] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#00B4E8] transition duration-150 ease-in-out hover:bg-[#00B4E8]-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#00B4E8]-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-[#00B4E8]-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {/* <!-- Linkedin --> */}
          <FaLinkedinIn class="mx-auto h-3.5 w-3.5" />
        </button>
      </div>
      {/* <!--Username input--> */}
      <div
        class="relative mb-4 border-b-2 
                        "
        data-te-input-wrapper-init
      >
        <input
          type="text"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.8rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput1"
          placeholder="Username"
        />
        <label
          for="exampleFormControlInput1"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Username
        </label>
      </div>

      {/* <!--Password input--> */}
      <div class="relative mb-4 border-b-2 " data-te-input-wrapper-init>
        <input
          type="password"
          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.8rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput11"
          placeholder="Password"
        />
        <label
          for="exampleFormControlInput11"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Password
        </label>
      </div>

      {/* <!--Submit button--> */}
      <div class="mb-12 pb-1 pt-1 text-center">
        <button
          class="mb-3 bg-[#00B4E8] inline-block w-full rounded px-6  py-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_10px_11px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_10px_10px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Log in
        </button>

        {/* <!--Forgot password link--> */}
        <a
          className="text-white/80 hover:text-white
                        "
          href="#!"
        >
          Forgot password?
        </a>
      </div>

      {/* <!--Register button--> */}
      <div class="text-white flex items-center justify-between pb-6">
        <p class="mb-0 mr-1">Don't have an account?</p>
        <Link
          to="/SignUp"
          type="button"
          class="hover:text-white/70 inline-block rounded border-2 border-red-400 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-redborder-red-400 transition duration-150 ease-in-out hover:border-red-400-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-redborder-red-400-600 focus:border-red-400-600 focus:text-redborder-red-400-600 focus:outline-none focus:ring-0 active:border-red-400-700 active:text-redborder-red-400-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Register
        </Link>
      </div>
    </form>
  );
};

const LogSign = () => {
  return (
    <section>
      <div className="w-full h-screen relative">
        <img className="w-full h-screen" src="../images/login/4.jpeg" alt="" />
        <Form />
      </div>
    </section>
    // <section class="gradient-form h-full bg-neutral-200">
    //   <div class=" h-full ">
    //     <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
    //       <div class="w-full">
    //         <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
    //           <div class="g-0 lg:flex lg:flex-wrap">
    //             <img
    //               className="w-full h-screen relative"
    //               src="../images/login/4.jpeg"
    //               alt=""
    //             />
    //             {/* <!-- Left column container--> */}
    //             <div class="px-4 md:px-0 lg:w-6/12 absolute shadow-lg border-2      ">
    //               <div class="flex justify-center items-center md:mx-6 md:p-12">
    //                 <div class="text-center ">
    //                   <img
    //                     src="images/base/logo.ico"
    //                     class="mx-auto  w-48   rounded-full  "
    //                   />
    //                 </div>
    //                 <Form />
    //               </div>
    //               {/* <!--Logo--> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default LogSign;
