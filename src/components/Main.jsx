import React, { useState } from "react";

import brandReco from "../images/icon-brand-recognition.svg";
import brandRecords from "../images/icon-detailed-records.svg";
import brandCustomized from "../images/icon-fully-customizable.svg";

function fetchLocalStorageData() {
  const urlList = localStorage.getItem("urlList");

  if (urlList) return JSON.parse(urlList);

  return null;
}

function limitStrLen(str) {
  if (window.innerWidth <= 425) {
    return str.substring(0, 37) + "...";
  }

  return str;
}

function Main(props) {
  const [url, setUrl] = useState("");
  const [isError, setIsError] = useState(false);
  const [shortenUrlList, setShortenUrlList] = useState(
    fetchLocalStorageData() || []
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnChange = function (event) {
    if (isError) {
      setIsError(false);
      setErrorMsg("");
    }
    setUrl(event.target.value);
  };

  const handleClick = async function () {
    if (url === "") {
      setIsError(true);
      return;
    }

    const shortenUrl = "https://api.shrtco.de/v2/shorten?url=" + url;

    const response = await fetch(shortenUrl);
    const result = await response.json();

    let newData = [];

    if (result.ok) {
      newData = [...shortenUrlList, result.result];
      setShortenUrlList(newData);
      updateLocalStorage(newData);
      setUrl("");
    } else {
      setErrorMsg(limitStrLen(result.error));
      setIsError(true);
    }
  };

  const updateUrlCopy = function (arr, url, state) {
    let updatedList = arr.map((item) => {
      if (item.code === url.code) {
        item.isCopied = state;
      }

      return item;
    });

    setShortenUrlList(updatedList);
    updateLocalStorage(updatedList);

    return updatedList;
  };

  const handleCopyClick = async function (url) {
    try {
      let updatedList = updateUrlCopy(shortenUrlList, url, true);

      setTimeout(() => updateUrlCopy(updatedList, url, false), 3000);
      await navigator.clipboard.writeText(url);
    } catch (e) {
      console.log(e);
    }
  };

  const updateLocalStorage = function (urls) {
    localStorage.setItem("urlList", JSON.stringify(urls));
  };

  return (
    <main>
      <div>
        <div className="lg:flex lg:py-10 lg:ml-24 2xl:container 2xl:mx-auto">
          <div className="bg-[url('images/illustration-working.svg')] bg-cover bg-no-repeat bg-left py-40 md:py-52 hero lg:order-2 lg:w-full lg:bg-contain lg:bg-right"></div>
          <div className="text-center lg:text-left py-8 px-4 lg:px-0">
            <h1 className="text-4xl lg:text-6xl lg:leading-[1.125em] font-bold mb-4 text-dark-violet">
              More than just shorter links
            </h1>
            <p className="text-lg lg:text-xl text-grayish-violet mb-7">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="lg:w-2/5 bg-c-cyan rounded-full text-white font-bold px-8 py-3 hover:bg-cyan-200">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="py-14 lg:py-12"></div>
        <div className="py-12 lg:py-10 bg-gray-200"></div>
        <div className="absolute top-10 lg:top-9 w-full">
          <div className="container mx-auto w-11/12 p-4 lg:p-10 bg-dark-violet bg-[url(images/bg-shorten-mobile.svg)] lg:bg-[url(images/bg-shorten-desktop.svg)] bg-no-repeat bg-right-top rounded-lg lg:flex lg:items-center">
            <label htmlFor="url" className="lg:w-4/5  lg:mr-5 lg:relative">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={url}
                id="url"
                onChange={handleOnChange}
                className={`w-full h-12 rounded-md lg:mb-0 px-4 outline-dark-violet ${
                  isError ? "border-2 border-solid border-red-600" : ""
                }`}
              />
              <span
                className={`text-red-600 ${
                  isError ? "visible" : "invisible"
                } italic h-5 lg:block lg:absolute lg:-bottom-5`}
              >
                {errorMsg.length > 0 ? errorMsg : "Please add url"}
              </span>
            </label>
            <button
              className="w-full lg:w-1/5 mt-2 lg:mt-0 bg-c-cyan h-12 rounded-md text-white font-bold hover:bg-cyan-200"
              onClick={handleClick}
            >
              Shorten It!
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 w-full pb-16">
        <div className="container mx-auto w-11/12 bg-gray-200 pb-5 pt-2 mb-16">
          {shortenUrlList.map((item) => (
            <div
              className="lg:flex lg:justify-between lg:items-center bg-white py-3 lg:px-10 mb-2 rounded-md"
              key={item.code}
            >
              <div className="w-full lg:w-[70%] border-b border-gray-200 lg:border-none px-5 lg:px-0 pb-3 lg:pb-0">
                <p className="">{limitStrLen(item.original_link)}</p>
              </div>
              <div className="w-full lg:w-[20%] lg:mr-10 px-5 lg:px-0 py-3">
                <p className="text-c-cyan lg:text-right">{item.short_link2}</p>
              </div>
              <div className="px-5 lg:px-0 lg:w-[10%]">
                <button
                  className={`w-full ${
                    item.isCopied ? "bg-dark-violet" : "bg-c-cyan"
                  } text-white rounded-md p-2`}
                  onClick={() => handleCopyClick(item)}
                >
                  {item.isCopied ? "copied" : "copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="container w-11/12 mx-auto text-center">
          <h2 className="text-2xl text-dark-violet font-bold">
            Advanced Statistics
          </h2>
          <p className="text-lg text-grayish-violet mt-5 lg:w-2/5 lg:mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="container w-11/12 mx-auto pt-10 relative z-10">
          <div className="w-full absolute top-60 lg:flex lg:justify-center lg:items-center">
            <div className="w-2 h-[40em] md:h-96 lg:w-11/12 lg:h-2 my-auto mx-auto bg-c-cyan"></div>
          </div>
          <div className="lg:flex lg:justify-center mt-10">
            <div className="w-full text-center lg:text-left relative lg:mb-28">
              <div className="w-full absolute -top-8">
                <div className="w-16 h-16 mx-auto lg:ml-6 rounded-full flex justify-center items-center bg-dark-violet">
                  <img src={brandReco} alt="Icon brand recognition" />
                </div>
              </div>
              <div className="bg-white pt-16 px-4 lg:px-6 pb-5 lg:pb-10 rounded-md">
                <h3 className="text-dark-violet text-xl font-bold">
                  Brand Recognition
                </h3>
                <p className="text-lg lg:text-xl text-grayish-violet mt-5">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className="w-full text-center lg:text-left relative mt-20 lg:mt-0 lg:ml-5 self-center">
              <div className="w-full absolute -top-8">
                <div className="w-16 h-16 mx-auto lg:ml-6 rounded-full flex justify-center items-center bg-dark-violet">
                  <img src={brandRecords} alt="Icon detailed records" />
                </div>
              </div>
              <div className="bg-white pt-16 px-4 lg:px-6 pb-5 lg:pb-10 rounded-md">
                <h3 className="text-dark-violet text-xl font-bold">
                  Detailed Records
                </h3>
                <p className="text-lg lg:text-xl text-grayish-violet mt-5">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="w-full text-center lg:text-left relative mt-20 lg:mt-0 lg:ml-5 self-end">
              <div className="w-full absolute -top-8">
                <div className="w-16 h-16 mx-auto lg:ml-6 rounded-full flex justify-center items-center bg-dark-violet">
                  <img src={brandCustomized} alt="Icon fully customizable" />
                </div>
              </div>
              <div className="bg-white pt-16 px-4 lg:px-6 pb-5 lg:pb-10 rounded-md">
                <h3 className="text-dark-violet text-xl font-bold">
                  Fully Customizable
                </h3>
                <p className="text-lg lg:text-xl text-grayish-violet mt-5">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark-violet bg-[url('images/bg-boost-mobile.svg')] md:bg-[url('images/bg-boost-desktop.svg')] bg-no-repeat text-white text-center py-24 md:py-16">
        <h2 className="font-bold text-2xl lg:text-3xl w-11/12 container mx-auto mt-3">
          Boost your links today
        </h2>
        <button className="bg-c-cyan rounded-full text-white font-bold px-8 py-3 mt-4 hover:bg-cyan-200">
          Get Started
        </button>
      </div>
    </main>
  );
}

export default Main;
