import React, { useState } from "react";
import Layout from "../components/layout";

function Contact() {
  return (
    <Layout>
      <div className="rounded bg-gradient-to-b from-purple-600 to-indigo-700 py-3 px-3 w-full">
        <div className="rounded dark:bg-slate-800 bg-white shadow w-full flex items-center justify-center my-2 min-h-screen">
          <div className="dark:bg-slate-800 bg-white rounded py-12 lg:px-28 px-8">
            <p className="dark:text-white md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Contact Me!
            </p>
            <div className="md:flex items-center mt-12">
              <div className="md:w-72 flex flex-col">
                <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                  Name
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input  name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                  Email Address
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input email address"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input email address"
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="md:w-72 flex flex-col">
                <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                  Company name
                </label>
                <input
                  tabIndex={0}
                  role="input"
                  arial-label="Please input company name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                  placeholder="Please input company name"
                />
              </div>
              <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                  Country
                </label>
                <input
                  tabIndex={0}
                  arial-label="Please input country name"
                  type="name"
                  className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                  placeholder="Please input country name"
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="dark:text-white text-base font-semibold leading-none text-gray-800">
                  Message
                </label>
                <textarea
                  tabIndex={0}
                  aria-label="leave a message"
                  role="textbox"
                  type="name"
                  className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                  defaultValue={""}
                />
              </div>
            </div>
            <p className="dark:text-white text-xs leading-3 text-gray-600 mt-4">
              *Contact feature currently unavailable
            </p>
            <div className="flex items-center justify-center w-full">
              <button className="hover:cursor-not-allowed mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
