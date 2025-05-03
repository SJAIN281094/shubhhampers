"use client";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full flex flex-col">
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
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Gift your loved ones a little something
          </p>
        </div>
      </div>

      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/5.jpeg"
                      alt="Gift basket for celebrations"
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg"
                      alt="Corporate gift basket"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      width={300}
                      height={400}
                      src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg"
                      alt="Custom gift basket"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-black">
                  Our Story
                </span>
                <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                  A Little Basket, A Lot of Joy
                </h2>
                <p className="mb-5 text-base text-gray-600">
                  We are a small business that specializes in creating beautiful
                  and unique gift baskets for all occasions. Our journey began
                  with a simple idea: to bring joy to people through
                  thoughtfully curated gifts that leave lasting impressions.
                </p>
                <p className="mb-8 text-base text-gray-600">
                  Our baskets are carefully curated with high-quality products
                  and can be customized to fit your needs. Whether you're
                  looking for a gift for Corporate, birthday, anniversary, or
                  any special occasion, we have the perfect basket for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black text-white">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM19 20H5V8H19V20Z"
                          fill="white"
                        />
                        <path
                          d="M12 12C13.38 12 14.5 10.88 14.5 9.5C14.5 8.12 13.38 7 12 7C10.62 7 9.5 8.12 9.5 9.5C9.5 10.88 10.62 12 12 12ZM12 9C12.28 9 12.5 9.22 12.5 9.5C12.5 9.78 12.28 10 12 10C11.72 10 11.5 9.78 11.5 9.5C11.5 9.22 11.72 9 12 9Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        Customized Gifts
                      </h4>
                      <p className="text-sm text-gray-600">
                        Tailored for every occasion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-black text-white">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        Premium Quality
                      </h4>
                      <p className="text-sm text-gray-600">
                        Only the finest products
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center py-3 px-7 text-base font-medium text-center text-white border border-transparent rounded-md bg-black hover:bg-gray-800 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Gift Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of gift baskets for every occasion and
              recipient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-black text-white h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Corporate Gifts</h3>
              <p className="text-gray-600">
                Impress your clients and employees with sophisticated gift
                baskets that represent your company's values.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-black text-white h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Celebration Baskets
              </h3>
              <p className="text-gray-600">
                Perfect for birthdays, anniversaries, holidays, and special
                milestones that deserve to be celebrated in style.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-black text-white h-16 w-16 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Creations</h3>
              <p className="text-gray-600">
                Tell us your vision, and we'll create a personalized gift basket
                tailored to your recipient's preferences and tastes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
