import background from "./images/pattern-circles.svg";
import { useState } from "react";

function App() {
  const [val, setVal] = useState(3);
  const [showMonth, setShowMonth] = useState(true);
  function handleChange(event) {
    setVal(+event.target.value);
  }

  const percentToGet = 75 / 100;

  const pageViews =
    val === 1
      ? "10K"
      : val === 2
      ? "50K"
      : val === 3
      ? "100K"
      : val === 4
      ? "500K"
      : "1M";

  const price =
    val === 1 ? 8 : val === 2 ? 12 : val === 3 ? 16 : val === 4 ? 24 : 36;

  const yearlyPrice =
    val === 1
      ? percentToGet * (8 * 12)
      : val === 2
      ? percentToGet * (12 * 12)
      : val === 3
      ? percentToGet * (16 * 12)
      : val === 4
      ? percentToGet * (24 * 12)
      : percentToGet * (36 * 12);

  function periodChangeHandler() {
    setShowMonth(!showMonth);
  }

  return (
    <div className="App">
      <div className="rectangle"></div>

      <div className="content">
        <div
          className="opening"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <h1 className="headline">Simple, traffic-based pricing</h1>
          <h2 className="subHeadline">
            Sign-up for our 30-day trial. <br /> No credit card required.
          </h2>
        </div>

        <div className="container">
          <div className="viewsDiv">
            <p className="views">{pageViews} PAGEVIEWS</p>

            <div className="monthlyDesktop">
              <h1 className="price">$ {showMonth ? price : yearlyPrice}</h1>
              <p className="month">/ {showMonth ? "month" : "year"}</p>
            </div>
          </div>

          <div className="fullLine">
            <input
              className="line"
              type="range"
              min={1}
              max={5}
              value={val}
              onChange={handleChange}
            />
            <div
              className="greenLine"
              style={{ width: (val - 1) * 25 + "%" }}
            ></div>
          </div>

          <div className="monthly">
            <h1 className="price">$ {showMonth ? price : yearlyPrice}</h1>
            <p className="month">/ {showMonth ? "month" : "year"}</p>
          </div>

          <div className="billing">
            <p className="monthlyBilling">Monthly Billing</p>

            <div
              className="checkBilling"
              onClick={periodChangeHandler}
              style={{
                backgroundColor: !showMonth ? "#7AEADF" : "#CFD8EF",
                paddingLeft: !showMonth ? "25px" : "4px",
              }}
            >
              <div className="checkCircle"></div>
            </div>

            <p className="yearlyBilling">Yearly Billing</p>

            <div className="discountDiv">
              <p className="discountPar">
                <span>25%</span>
                <span className="discountSpan">discount</span>
              </p>
            </div>
          </div>

          <div className="littleLine"></div>

          <div className="ending">
            <div className="benefits">
              <div className="benefitOne">
                <svg
                  className="checkIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>

                <p className="unlimited">Unlimited Websites</p>
              </div>

              <div className="benefitTwo">
                <svg
                  className="checkIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>

                <p className="ownership">100% data ownership</p>
              </div>

              <div className="benefitThree">
                <svg
                  className="checkIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="8"
                >
                  <path
                    fill="none"
                    stroke="#10D8C4"
                    strokeWidth="2"
                    d="M1 4.134l1.907 1.908L7.949 1"
                  />
                </svg>

                <p className="reports">Email reports</p>
              </div>
            </div>

            <button className="button">Start my trial</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

// 1          2          3           4             5
//  0%        25%        50%        75%            100%
//  0           1        2          3              4

// (val - 1) * 25
