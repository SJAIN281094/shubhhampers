import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              GIft your loved ones a little something
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              We are a small business that specializes in creating beautiful and
              unique gift hampers for all occasions.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              {`Our hampers are carefully curated with high-quality products and
              can be customized to fit your needs. Whether you're looking for a
              gift for Corporate, birthday, anniversary, etc. we have the
              perfect hampers for you.`}
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-md border border-transparent bg-[#2a2e33] px-8 py-3 my-5 text-center font-medium text-white hover:bg-[#12171d]"
            >
              Connect With Us
            </Link>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
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
