import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <main className="grid min-h-full place-items-center h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center items-center">
      <p className="text-base font-semibold text-slate-600">Page not found</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-rose-500 sm:text-5xl">Error: 404</h1>
      <p className="mt-4 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-12 flex items-center justify-center gap-x-6">
        <a
          href="/"
          className="py-2 px-3 rounded-lg bg-green-500 hover:bg-green-600 active:bg-green-700 ease-in duration-75 text-sm font-semibold text-white flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>
          Go back home
        </a>
      </div>
    </div>
  </main>
  );
};

export default ErrorPage;
