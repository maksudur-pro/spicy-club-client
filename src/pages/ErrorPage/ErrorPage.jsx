import React from "react";
import { FaSadTear } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";
import errorPage from "../../assets/error.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <Lottie animationData={errorPage} loop={true} />
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl text-red-500 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn ">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
