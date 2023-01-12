import React from "react";

import brandImage from "../images/illustration-working.svg";
import brandReco from "../images/icon-brand-recognition.svg";
import brandRecords from "../images/icon-detailed-records.svg";
import brandCustomized from "../images/icon-fully-customizable.svg";

function Main(props) {
  return (
    <main>
      <div>
        <div>
          <img src={brandImage} alt="Brand iamge showing a woman at work" />
          <div>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
        <div>
          <div>
            <label for="url">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value=""
                id="url"
              />
            </label>
            <button>Shorten It!</button>
          </div>
          <div></div>
        </div>
      </div>

      <div>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>

        <div>
          <div>
            <img src={brandReco} alt="Icon brand recognition" />
            <div>
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click. Generic links
                don’t mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
          </div>
          <div>
            <img src={brandRecords} alt="Icon detailed records" />
            <div>
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </div>
          <div>
            <img src={brandCustomized} alt="Icon fully customizable" />
            <div>
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Boost your links today</h2>
        <button>Get Started</button>
      </div>
    </main>
  );
}

export default Main;
