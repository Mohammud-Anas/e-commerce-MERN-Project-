import React from "react";
import { useSelector } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const CheckOutPage = () => {
  const subTotal = useSelector((state) => state.cart.subTotal);

  return (
    <section className="bg-white py-8 px-1 md:px-8 antialiased dark:bg-gray-900 md:py-6">
      <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Your existing form content here */}
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Delivery Details
              </h2>
              {/* Your form inputs here */}
            </div>
          </div>
          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                <dl className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Subtotal
                  </dt>
                  {subTotal && (
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      Rs.{subTotal}
                    </dd>
                  )}
                </dl>
                {/* Additional summary items */}
              </div>
            </div>
            <div className="space-y-3">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => (window.location.href = "/checkout")}
              >
                Proceed to Payment
              </button>
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                One or more items in your cart require an account.{" "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                >
                  Sign in or create an account now.
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/return" element={<Return />} />
          <Route path="/" element={<CheckOutPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
