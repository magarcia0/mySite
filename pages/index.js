//Code for landing page adapted from:
//https://github.com/creativetimofficial/notus-nextjs/blob/main/pages/landing.js
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import piggy from "./img/piggy.jpg"
import github from "./img/github.svg"
import avatar from "./img/avatar.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBullhorn, faCertificate, faPiggyBank, faReward } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <Layout home>
      <title>{siteTitle}</title>
      <main>
        <div className="relative mt-24 pt-24 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover rounded-sm"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
          </div>
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black">
            </span>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                  Welcome to my Website!
                  </h1>
               </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-purple-600 to-indigo-700">
                      <FontAwesomeIcon icon={faCertificate} />
                    </div>
                    <h6 className="text-xl font-semibold">Deans List - 2022</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Made Deans List for Spring '22 Semester
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-purple-600 to-indigo-700">
                      <FontAwesomeIcon icon={faUserGraduate} />
                    </div>
                    <h6 className="text-xl font-semibold">BS Computer Science</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Bachelors in Computer Science from California State University, Chico
                    </p>
                  </div>
                </div>
              </div>


              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-purple-600 to-indigo-700">
                      <FontAwesomeIcon icon={ faCertificate } />
                    </div>
                    <h6 className="text-xl font-semibold">Deans List - 2018</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Made Deans List for Fall'18 Semester
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="p-3 text-xl text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-white">
                  Full Stack Developer
                </h3>
                <p className="text-lg font-light leading-relaxed dark:text-white mt-4 mb-4 text-blueGray-600">
                  Experienced in both front-end and back-end web development
                </p>
                <p className="text-lg font-light leading-relaxed dark:text-white mt-0 mb-4 text-blueGray-600">
                  Some web frameworks I have used include Next.js, Django, and Flutter.
                </p>
                <Link href="https://nextjs.org/">
                  <a className="dark:text-white font-bold text-blueGray-700 mt-8">
                    This site was built using NextJS!
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto py-20">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 pt-16 mb-4">
                    <h4 className="text-xl font-bold text-black">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-black">
                    Offering quality, affordable website services. Static and dynamic web sites!
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-8">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Image
                  alt="piggy bank"
                  className="max-w-full rounded-lg shadow-lg"
                  src={piggy}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-black text-3xl mt-28 bg-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                      <FontAwesomeIcon icon={faPiggyBank} />
                  </div>
                  <h3 className="text-3xl dark:text-white text-black font-semibold">
                    Affordable Consultations 
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed dark:text-white text-black">
                  Some website developers charge upwards of <span className="text-red-500">$240 </span> per hour for consultations.
                  </p>
                  <br/>
                  <p className="mt-4 text-lg leading-relaxed dark:text-white text-black">
                    Don't break the piggy bank! First hour is FREE* on consultations
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs dark:text-white font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-100 mr-3">
                            *Affordable rate of $80 per hour after
                          </span>
                        </div>
                      </div>
                    </li>
                 </ul>
                </div>
              </div>
            </div>
          </div>
        <br/>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl text-black dark:text-white font-semibold">Here are our developers</h2>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                <Image
                    alt="avatar"
                    src={avatar}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    height="90"
                    width="90"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl text-black dark:text-white font-bold">Marco A. Garcia</h5>
                    <p className="mt-1 text-sm text-black dark:text-white uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <Link href="https://github.com/magarcia0">
                        <button
                        className=" bg-gradient-to-t from-purple-600 to-indigo-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        >
                          <Image
                          alt="github"
                          src={github}
                          />
                        </button>
                      </Link>
                   </div>
                  </div>
                </div>
              </div>

             <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <Image
                    alt="avatar"
                    src={avatar}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                    height="90"
                    width="90"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl dark:text-white text-black font-bold">Marco A. Garcia</h5>
                    <p className="mt-1 text-sm dark:text-white text-black uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <Link href="https://github.com/magarcia0">
                        <button
                        className=" bg-gradient-to-t from-purple-600 to-indigo-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        >
                          <Image
                          alt="github"
                          src={github}
                          />
                        </button>
                      </Link>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-44 ">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                 Grow your business! 
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
                  More businesses are starting the realize the importance of an online presence.
                  Not only does having a website boosts your credibility as a legitimate business, 
                  it also allows you to make a strong impression on potential clients.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-2xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Build credibility for your business
                </h6>
                <p className="mt-2 mb-4 text-white">
                  Having a website lets customers find you online and builds more
                  trust in your brand.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-2xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faBullhorn} />

                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Gain an internet presence
                </h5>
                <p className="mt-2 mb-4 text-white">
                  Claim your own piece of the internet by having a website
                  that will make a lasting impression on your current and future clients.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-2xl p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Impress potential clients
                </h5>
                <p className="mt-2 mb-4 text-white">
                  With a well developed website potential clients
                  will take you more serious as a business.

                </p>
              </div>
            </div>
          </div>
        </section>
     </main>
          </Layout>
  );
}