import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section className="flex items-center h-screen p-16  text-slate-600">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img
            className="w-full mx-auto"
            src="https://i.ibb.co/xffyTsf/image-18.png"
            alt=""
          />
          <p className="text-2xl font-semibold md:text-2xl my-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className= "rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 active:scale-95 ease-in duration-75 px-5 py-3 text-md font-semibold text-white gap-2 items-center justify-center"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
