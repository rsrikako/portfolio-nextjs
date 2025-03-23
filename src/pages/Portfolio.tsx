import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaJava,
  FaDatabase,
} from "react-icons/fa";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ReactMarkdown from "react-markdown";
import "../styles/globals.css";
import { FaCertificate } from "react-icons/fa";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    content:
      "### React Hooks\nReact Hooks allow you to use state and lifecycle features in function components...",
  },
  {
    title: "Building REST APIs with Spring Boot",
    content:
      "### Spring Boot APIs\nSpring Boot makes it easy to build REST APIs with minimal configuration...",
  },
  {
    title: "Building REST APIs with Spring Boot",
    content:
      "### Spring Boot APIs\nSpring Boot makes it easy to build REST APIs with minimal configuration...",
  },
];

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Experience", href: "#experience", current: false },
  { name: "Certifications", href: "#certifications", current: false },
  { name: "Blogs", href: "#blogs", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const certifications = [
  {
    title: "Certified Java Developer",
    organization: "Oracle Corporation",
    year: "2020",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    organization: "Amazon Web Services",
    year: "2019",
  },
  {
    title: "Certified Scrum Master",
    organization: "Scrum Alliance",
    year: "2018",
  },
];

export default function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen relative">
      <Disclosure as="nav" className="bg-black fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <main className="flex-grow flex flex-col pt-16 overflow-hidden">
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Hello, Im{" "}
            <span className="text-blue-500">Ravikiran Srikakolapu</span>
          </h1>
          <p className="text-lg max-w-xl">
            Expert in Angular, React, Java Spring Boot, SQL, and more with 9
            years of experience.
          </p>

          <motion.div
            className="mt-8 animate-bounce"
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7 7 7-7"
              />
            </svg>
          </motion.div>
        </section>

        <section id="skills" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex items-center justify-center flex-col gap-10 text-8xl md:flex-row">
            {[FaReact, FaAngular, FaJava, FaDatabase].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <Icon className="text-blue-500" />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="md:m-4">
          <div className="relative max-w-4xl mx-auto">
            <motion.div
                className={`absolute left-0 transform -translate-x-1/2 w-1 bg-blue-500 md:left-1/2 p-2-md`}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
            {[
              {
                company: "Company A",
                role: "Senior Developer",
                years: "2020 - Present",
                project: "Enterprise Web App Development",
                description: 'abc'
              },
              {
                company: "Company B",
                role: "Software Engineer",
                years: "2016 - 2020",
                project: "Scalable Microservices Architecture",
                                description: 'abc'
              },
              {
                company: "Company C",
                role: "Junior Developer",
                years: "2014 - 2016",
                project: "E-commerce Platform Development",
                                description: 'abc'
              },
              {
                company: "School A",
                role: "ABC School",
                years: "2014 - 2016",
                project: "CBSC",
                                description: 'abc'
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                className={`mb-10 flex items-center justify-center flex-col ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } md:flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-gray-800 rounded-lg p-4 shadow-md transform hover:scale-105 transition-transform">
                  <h3 className="text-sm font-semibold mb-1">
                    {job.company} - {job.role} ({job.years})
                  </h3>
                  <p className="text-xs mb-2">Project: {job.project}</p>
                  <p className="text-sm text-gray-300">
                    {job.description || "Description coming soon..."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
         
        </section>

        <section id="certifications" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certification, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform m-4"
              >
                <FaCertificate className="mb-4 text-4xl text-blue-500" />
                <h3 className="text-xl font-semibold">{certification.title}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {certification.organization}, {certification.year}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="blogs" className="py-20 text-center container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Blogs</h2>
          <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-3 gap-12 md:gap-8 items-center">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mx-auto max-w-sm bg-gray-800 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform m-4 mx-auto w-full max-w-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
                <ReactMarkdown
                  // eslint-disable-next-line react/no-children-prop
                  children={post.content}
                  className="text-sm text-gray-300"
                />
              </motion.div>
            ))}
          </div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Contact Me</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-900 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform m-4">
              <form action="/api/contact" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-left p-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="mt-1 p-2 block w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left p-2 text-sm font-medium text-white"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className="mt-1 p-2 block w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-left p-2 text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="mt-1 p-2 block w-full rounded-md border border-gray-700 bg-gray-800 text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-gray-700 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
