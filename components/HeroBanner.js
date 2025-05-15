import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="lg:pb-80 pt-16 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-4 justify-between">
          <div className="xl:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              GIft your loved ones a little something
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We are a small business that specializes in creating beautiful and unique gift hampers
              for all occasions.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              {`Our hampers are carefully curated with high-quality products and
              can be customized to fit your needs. Whether you're looking for a
              gift for Corporate, birthday, anniversary, etc. we have the
              perfect hampers for you.`}
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md border border-transparent bg-[#d1988f] px-8 py-3 my-5 text-center font-medium text-white hover:bg-[#12171d]"
            >
              Connect With Us
            </Link>
          </div>
          <div>
            <div className="lg:max-w-lg xl:hidden my-7">
              <HeroSlider
                images={[
                  <Image
                    key="1.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/1.jpeg"
                    alt=""
                    className="mb-9"
                  />,
                  <Image
                    key="2.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/2.jpeg"
                    alt=""
                  />,
                  <Image
                    key="3.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/3.jpeg"
                    alt=""
                  />,
                  <Image
                    key="4.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/4.jpeg"
                    alt=""
                  />,
                  <Image
                    key="5.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/5.jpeg"
                    alt=""
                  />,
                  <Image
                    key="6.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/6.jpeg"
                    alt=""
                  />,
                  <Image
                    key="7.jpg"
                    width={100}
                    height={100}
                    src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/8.jpeg"
                    alt=""
                  />,
                ]}
              />
            </div>
            <div className="mt-10 hidden xl:block">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="lg:absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg lg:opacity-100">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/1.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/2.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/3.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/4.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/5.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/6.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <Image
                          width={300}
                          height={300}
                          src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/8.jpeg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
