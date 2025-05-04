import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <section>
      <div className="mx-auto lg:w-10/12 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Our Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500"></p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <Link href={"/products"} className="group relative block">
              <Image
                height={300}
                width={300}
                src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/9.jpeg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                  Corporate Gift
                </span>
              </div>
            </Link>
          </li>

          <li>
            <Link href={"/products"} className="group relative block">
              <Image
                height={300}
                width={300}
                src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/3.jpeg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                  {`Mother's Day Gift`}
                </span>
              </div>
            </Link>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <Link href={"/products"} className="group relative block">
              <Image
                height={300}
                width={500}
                src="https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg"
                alt=""
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white rounded">
                  Diwali Gift
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Collection;
