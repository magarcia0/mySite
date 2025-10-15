import Layout from "../components/layout";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faTerminal,
  faCode,
  faUserGraduate,
  faPiggyBank,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const { scrollY } = useScroll();

  // Define the ranges for opacity transformation
  const heroOpacity = useTransform(scrollY, [0, 100], [0.5, 1]);
  const sectionOpacity = useTransform(scrollY, [0, 400], [0, 1]);
  const fadeOutOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <Layout home>
      <main>
        {/* Hero Section */}
        <h1 className="hidden">Marco Garcia</h1>
        <motion.div
          className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen"
          style={{ opacity: heroOpacity }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="absolute top-0 w-screen h-full bg-center bg-cover rounded-sm"
            >
          <Image
            alt="Marco Garcia - Hero Banner Image"
            src="/code.jpg"
            layout="fill"
            priority
          />
          </div>
          <span id="blackOverlay" className="w-screen h-full absolute opacity-60  bg-black"></span>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <motion.h1
                  className="text-white font-semibold text-5xl"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Marco A. Garcia
                </motion.h1>
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
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </motion.div>

        {/* Section 1 */}
        <motion.section
          className="pb-20 bg-blueGray-200 -mt-24"
          style={{ opacity: sectionOpacity }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              {[{
                icon: faCertificate,
                title: 'Security+',
                description: 'CompTIA Security+ Certified',
              }, {
                icon: faUserGraduate,
                title: 'B.S. Computer Science',
                description: 'Bachelors in Computer Science from California State University, Chico',
              }, {
                icon: faTerminal,
                title: 'Current Position',
                description: 'Senior Software Engineer',
              }].map(({ icon, title, description }, index) => (
                <motion.div
                  key={index}
                  className="w-full md:w-4/12 px-4 text-center"
                  style={{ opacity: sectionOpacity }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-purple-600 to-indigo-700">
                        <FontAwesomeIcon icon={icon} />
                      </div>
                      <h1 className="text-xl font-semibold">{title}</h1>
                      <p className="mt-2 mb-4 text-blueGray-500">{description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          className="pb-20 bg-blueGray-200 -mt-24"
          style={{ opacity: sectionOpacity }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="p-3 text-xl text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <FontAwesomeIcon icon={faCode} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-white">Full Stack Developer</h3>
                <p className="text-lg leading-relaxed dark:text-white mt-4 mb-4 text-blueGray-600">
                  Experienced in both front-end and back-end web development
                </p>
                <p className="text-lg leading-relaxed dark:text-white mt-0 mb-4 text-blueGray-600">
                  Some frameworks I have experience using include: Spring Boot, Spring 6, Next.js, Django, and Flutter.
                </p>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto py-20">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <Image
                    alt="Marco Garcia - Currently Employed"
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                    height={369}
                    width={554}
                  />
                  <blockquote className="relative p-8 pt-16 mb-4">
                    <h4 className="text-xl font-bold text-black">Currently Employed</h4>
                    <p className="mt-4 text-lg leading-relaxed text-black">
                      My current position title is: Senior Software Engineer at SAIC
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Client Work Section */}
        <motion.section
          className="relative py-8"
          style={{ opacity: sectionOpacity }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap flex-row-reverse">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-black text-3xl bg-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                    <FontAwesomeIcon icon={faPiggyBank} />
                  </div>
                  <h3 className="text-3xl dark:text-white text-black font-semibold">Not taking on side work</h3>
                  <p className="mt-4 text-lg leading-relaxed dark:text-white text-black">
                    Due to the nature of my current position, I am not taking on work for clients. This is to avoid what could appear to be a personal conflict of interest.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                  <Image
                    alt="Marco Garcia - Piggy Bank"
                    className="max-w-full rounded-lg shadow-lg"
                    src="/piggy.jpg"
                    height={369}
                    width={554}
                  />
                  <blockquote className="relative p-8 pt-16 mb-4">
                    <h4 className="text-xl font-bold text-black">Hobbies</h4>
                    <p className="mt-1 text-lg leading-relaxed dark:text-white text-black">
                      Below are some of my hobbies
                    </p>
                    <ul class="list-disc list-inside mx-auto w-1/2">
                      <li>Home Automation (HA Server)</li>
                      <li>PC Building</li>
                      <li>Kayaking</li>
                      <li>Working out</li>
                      <li>Vinyl Records</li>
                    </ul>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <div className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-5 bg-white rounded-full shadow-lg">
              <Image src="/avatar.png" alt="Marco Garcia - Avatar" className="w-16 h-16 rounded-full" width={128} height={128} />
            </div>
            <h4 className="text-xl font-semibold dark:text-white">Let's Connect!</h4>
            <div className="flex justify-center mt-4">
              <a
                href="https://github.com/magarcia0"
                className="mx-2"
                target="_blank"
                aria-label="GitHub"
              >
                <Image src="/github.svg" alt="Marco Garcia - GitHub" width={32} height={32} className="rounded-full bg-indigo-500 hover:bg-blue-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/marco-garcia-a03051248"
                className="mx-2"
                target="_blank"
                aria-label="LinkedIn"
              >
                <Image src="/linked.svg" alt="Marco Garcia - LinkedIn" width={32} height={32} className="rounded-full bg-indigo-500 hover:bg-blue-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
