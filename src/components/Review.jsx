import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = ({ place }) => {
  return (
    <section className="bg-white-50">
      {/* titre */}

      <div class="mx-auto text-align-center shadow-md hover:shadow-lg rounded  py-2.5 text-center bg-slate-400 shadow-md color-white	 my-10 bg md:max-w-xl">
        <h3 class=" text-3xl text-white font-bold">TRAVELERS REVIEWS</h3>
      </div>
      {/* titre */}
      <form className="grid gap-4 grid-cols-2 ">
        <div class=" m-4 text-center rounded-lg bg-white p-6  shadow-2xl shadow-md ">
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
            <img src="../images/login/signup.jpg" alt="" />
          </div>
          <AiFillStar className=" inline text-[15px]" color="#e4a853" />
          <h5 class="mt-2 text-base leading-3 font-normal text-blue-400 ">
            oumaima haibok
          </h5>
          <br/>
          <p class="mb-4 text-base text-neutral-600 ">
            During my recent trip to {place.name}, I had an absolutely
            incredible experience. From the moment I arrived, I was greeted with
            warm hospitality and exceptional service.
            {/* The [hotel/resort] I
            stayed at was nothing short of amazing. The rooms were spacious,
            clean, and beautifully decorated, offering breathtaking views of
            [landmarks/natural beauty]. The staff went above and beyond to
            ensure my stay was comfortable and enjoyable */}
          </p>
        </div>
        <div class=" m-4 text-center rounded-lg bg-white p-6  shadow-2xl shadow-md ">
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
            <img src="../images/login/signup.jpg" alt="" />
          </div>
          <AiFillStar className=" inline text-[15px]" color="#e4a853" />
          <h5 class="mt-2 text-base leading-3 font-normal text-blue-400 ">
            fady al houssaini
          </h5>
          <br/>

          <p class="mb-4 text-base text-neutral-600 ">
            During my recent trip to {place.name}, I had an absolutely
            incredible experience. From the moment I arrived, I was greeted with
            warm hospitality and exceptional service.
            {/* The [hotel/resort] I
            stayed at was nothing short of amazing. The rooms were spacious,
            clean, and beautifully decorated, offering breathtaking views of
            [landmarks/natural beauty]. The staff went above and beyond to
            ensure my stay was comfortable and enjoyable */}
          </p>
        </div>
        <div class=" m-4 text-center rounded-lg bg-white p-6  shadow-2xl shadow-md ">
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
            <img src="../images/login/signup.jpg" alt="" />
          </div>
          <AiFillStar className=" inline text-[15px]" color="#e4a853" />
          <h5 class="mt-2 text-base leading-3 font-normal text-blue-400 ">
            charaf zitouni
          </h5>
          <br/>

          <p class="mb-4 text-base text-neutral-600 ">
            During my recent trip to {place.name}, I had an absolutely
            incredible experience. From the moment I arrived, I was greeted with
            warm hospitality and exceptional service.
            {/* The [hotel/resort] I
            stayed at was nothing short of amazing. The rooms were spacious,
            clean, and beautifully decorated, offering breathtaking views of
            [landmarks/natural beauty]. The staff went above and beyond to
            ensure my stay was comfortable and enjoyable */}
          </p>
        </div>
        <div class=" m-4 text-center rounded-lg bg-white p-6  shadow-2xl shadow-md ">
          <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white">
            <img src="../images/login/signup.jpg" alt="" />
          </div>
          <AiFillStar className=" inline text-[15px]" color="#e4a853" />
          <h5 class="mt-2 text-base leading-3 font-normal text-blue-400 ">
            Zakaria oubella
          </h5>
          <br/>
        

          <p class="mb-4 text-base text-neutral-600 ">
            During my recent trip to {place.name}, I had an absolutely
            incredible experience. From the moment I arrived, I was greeted with
            warm hospitality and exceptional service.
            {/* The [hotel/resort] I
            stayed at was nothing short of amazing. The rooms were spacious,
            clean, and beautifully decorated, offering breathtaking views of
            [landmarks/natural beauty]. The staff went above and beyond to
            ensure my stay was comfortable and enjoyable */}
          </p>
        </div>
      </form>
      <button
  type="button"
  class="block mx-auto rounded bg-white px-6 my-10 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-blue-800 shadow-lg focus:outline-none focus:ring-0"
>
  Add Review
</button>





      {/* <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 class="mb-6 text-3xl font-bold">Testimonials</h3>
        <p class="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div class="grid gap-6 text-center md:grid-cols-3">
        <div>
          <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
            <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
            <div class="mx-auto mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
            </div>
            <div class="p-6">
              <h4 class="mb-4 text-2xl font-semibold">Maria Smantha</h4>
              <hr />
              <p class="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Review;
