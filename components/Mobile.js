import Link from "next/link";
import Image from "next/image";

const Mobile = ({ setIsOpen }) => {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <Link
            className="block text-teal-600"
            onClick={() => setIsOpen(false)}
            href="/"
          >
            <Image
              height={200}
              width={200}
              src="/shubhhampers-mini.png"
              alt=""
            />
          </Link>

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
