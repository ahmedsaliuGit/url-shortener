import React from "react";

import brandReco from "../images/icon-brand-recognition.svg";
import brandRecords from "../images/icon-detailed-records.svg";
import brandCustomized from "../images/icon-fully-customizable.svg";

function Main(props) {
  return (
    <main>
      <div>
        <div>
          <div className="bg-[url('images/illustration-working.svg')] bg-cover bg-no-repeat bg-left py-40 md:py-52 hero"></div>
          <div className="text-center py-8 px-4">
            <h1 className="text-4xl font-bold mb-4 text-dark-violet">
              More than just shorter links
            </h1>
            <p className="text-lg text-grayish-violet mb-5">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="bg-c-cyan rounded-full text-white font-bold px-8 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="py-14"></div>
        <div className="py-14 bg-gray-200"></div>
        <div className="absolute top-10 w-full">
          <div className="container mx-auto w-11/12 p-4 bg-dark-violet bg-[url(images/bg-shorten-mobile.svg)] bg-no-repeat bg-right-top rounded-lg">
            <label htmlFor="url">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value=""
                id="url"
                onChange={() => console.log("iput")}
                className="w-full h-12 rounded-md mb-5 px-4"
              />
            </label>
            <button className="w-full bg-c-cyan h-12 rounded-md text-white font-bold">
              Shorten It!
            </button>
          </div>
          <div></div>
        </div>
      </div>

      <div className="bg-gray-200 w-full py-16">
        <div className="container w-11/12 mx-auto text-center">
          <h2 className="text-2xl text-dark-violet font-bold">
            Advanced Statistics
          </h2>
          <p className="text-lg text-grayish-violet mt-5">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="container w-11/12 mx-auto pt-10 relative z-10">
          <div className="w-full absolute top-60">
            <div className="w-2 h-[40em] my-auto mx-auto bg-c-cyan"></div>
          </div>
          <div className="w-full text-center relative mt-10">
            <div className="w-full absolute -top-8">
              <div className="w-16 h-16 mx-auto rounded-full flex justify-center items-center bg-dark-violet">
                <img src={brandReco} alt="Icon brand recognition" />
              </div>
            </div>
            <div className="bg-white pt-16 px-4 pb-5 rounded-md">
              <h3 className="text-dark-violet text-xl font-bold">
                Brand Recognition
              </h3>
              <p className="text-lg text-grayish-violet mt-5">
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div className="w-full text-center relative mt-20">
            <div className="w-full absolute -top-8">
              <div className="w-16 h-16 mx-auto rounded-full flex justify-center items-center bg-dark-violet">
                <img src={brandRecords} alt="Icon detailed records" />
              </div>
            </div>
            <div className="bg-white pt-16 px-4 pb-5 rounded-md">
              <h3 className="text-dark-violet text-xl font-bold">
                Detailed Records
              </h3>
              <p className="text-lg text-grayish-violet mt-5">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div className="w-full text-center relative mt-20">
            <div className="w-full absolute -top-8">
              <div className="w-16 h-16 mx-auto rounded-full flex justify-center items-center bg-dark-violet">
                <img src={brandCustomized} alt="Icon fully customizable" />
              </div>
            </div>
            <div className="bg-white pt-16 px-4 pb-5 rounded-md">
              <h3 className="text-dark-violet text-xl font-bold">
                Fully Customizable
              </h3>
              <p className="text-lg text-grayish-violet mt-5">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-violet bg-[url('images/bg-boost-mobile.svg')] bg-no-repeat text-white text-center py-24">
        <h2 className="font-bold text-2xl w-11/12 container mx-auto mt-3">
          Boost your links today
        </h2>
        <button className="bg-c-cyan rounded-full text-white font-bold px-8 py-3 mt-4">
          Get Started
        </button>
      </div>
    </main>
  );
}

export default Main;
