"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
import Image from "next/image";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzvzdkk");
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  if (showSuccess) {
    return (
      <div className="w-full mx-auto flex items-center justify-center p-2">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">
            Your message has been sent successfully.
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Hero section with background */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/hero-pattern.png"
            alt="Background pattern"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="container relative z-10 px-6 py-20 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {`We'd love to hear from you. Get in touch with our team for any
            questions or inquiries.`}
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            {/* <div className="bg-gray-50 p-8 rounded-lg order-2 lg:order-1">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="First Name"
                      required
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <ValidationError
                      prefix="First Name"
                      field="First Name"
                      errors={state.errors}
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="Last Name"
                      required
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <ValidationError
                      prefix="Last Name"
                      field="Last Name"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    name="email"
                    required
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    name="subject"
                    required
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-48 focus:border-gray-400 focus:ring-gray-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your message here..."
                    name="Message"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="Message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white uppercase transition-colors duration-300 transform bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </div> */}

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Get in touch
              </h2>
              <p className="text-gray-600 mb-8">
                Our team is here to help you with any questions or concerns you
                may have about our products and services.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-black text-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Contact
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {`We'll respond within 24 hours`}
                    </p>
                    <a
                      href="mailto:connect@shubhhampers.com"
                      className="mt-1 text-indigo-600 hover:underline"
                    >
                      connect@shubhhampers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-black text-white rounded-full">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Instagram
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {`Connect with us on social media`}
                    </p>
                    <a
                      href="https://www.instagram.com/shubhhampers_/#"
                      className="mt-1 text-indigo-600 hover:underline"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-black text-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Support
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {`We'll respond within 24 hours`}
                    </p>
                    <a
                      href="mailto:connect@shubhhampers.com"
                      className="mt-1 text-indigo-600 hover:underline"
                    >
                      support@shubhhampers.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-black text-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      Get in touch with us directly
                    </p>
                    <a
                      href="tel:+919685847274"
                      className="mt-1 text-indigo-600 hover:underline"
                    >
                      +91-9685847274
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-black text-white rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-800">
                      Office
                    </h3>
                    <p className="mt-1 text-gray-700">
                      DLF Industrial Area, Faridabad, Haryana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
