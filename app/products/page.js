"use client";
import { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import HomeProducts from "@/components/HomeProducts";
import Image from "next/image";

const sortOptions = [
  { name: "Most Popular", value: "popularity", current: true },
  { name: "Newest", value: "newest", current: false },
  { name: "Price: Low to High", value: "price-asc", current: false },
  { name: "Price: High to Low", value: "price-desc", current: false },
];

const categories = [
  { name: "All Products", value: "all", current: true },
  { name: "Corporate Gifts", value: "corporate", current: false },
  { name: "Diwali Gifts", value: "diwali", current: false },
  { name: "Holi Gifts", value: "holi", current: false },
  { name: "Women's Day Gifts", value: "womens", current: false },
  { name: "Birthday Gifts", value: "birthday", current: false },
  { name: "Mother's Day", value: "mothers", current: false },
  {
    name: "New Year/Christmas Gifts",
    value: "newyear-christmas",
    current: false,
  },
  { name: "Wedding Gifts", value: "wedding", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mockProducts = {
  data: [
    {
      _id: "1",
      name: "Luxury Gift Hamper",
      price: 99.99,
      description:
        "A luxury gift hamper with assorted chocolates, wine, and gourmet snacks.",
      category: "premium",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/10.jpeg",
    },
    {
      _id: "2",
      name: "Birthday Celebration Hamper",
      price: 79.99,
      description:
        "Perfect birthday gift hamper with cake, balloons, and personalized items.",
      category: "corporate",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/11.jpeg",
    },
    {
      _id: "3",
      name: "Chocolate Lovers Hamper",
      price: 59.99,
      description:
        "Indulgent hamper filled with premium chocolates from around the world.",
      category: "chocolate",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/12.jpeg",
    },
    {
      _id: "8",
      name: "Tea Lover's Hamper",
      price: 49.99,
      description:
        "Delightful hamper for tea enthusiasts with premium teas, honey, and elegant teaware.",
      category: "tea",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/18.jpeg",
    },
    {
      _id: "8",
      name: "Tea Lover's Hamper",
      price: 49.99,
      description:
        "Delightful hamper for tea enthusiasts with premium teas, honey, and elegant teaware.",
      category: "tea",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/19.jpeg",
    },
    {
      _id: "4",
      name: "Wellness Gift Hamper",
      price: 89.99,
      description:
        "Self-care hamper with organic skincare products, herbal teas, and aromatherapy items.",
      category: "wellness",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/13.jpeg",
    },
    {
      _id: "5",
      name: "Corporate Gift Basket",
      price: 129.99,
      description:
        "Professional gift hamper for business associates with premium items and elegant packaging.",
      category: "corporate",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/14.jpeg",
    },
    {
      _id: "6",
      name: "Wine & Cheese Hamper",
      price: 119.99,
      description:
        "Sophisticated hamper with selected wines, artisanal cheeses, and gourmet crackers.",
      category: "gourmet",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/15.jpeg",
    },
    {
      _id: "7",
      name: "Baby Shower Gift Hamper",
      price: 69.99,
      description:
        "Adorable hamper filled with baby essentials, toys, and keepsakes for new parents.",
      category: "baby",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/16.jpeg",
    },
    {
      _id: "8",
      name: "Tea Lover's Hamper",
      price: 49.99,
      description:
        "Delightful hamper for tea enthusiasts with premium teas, honey, and elegant teaware.",
      category: "tea",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg",
    },
  ],
};

const Products = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (mockProducts?.data) {
      // Here you would implement actual filtering and sorting
      setFilteredProducts(mockProducts);
    }
  }, [mockProducts]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Filtering logic would be implemented here
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
    // Sorting logic would be implemented here
  };

  return (
    <div className="bg-white">
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
        <div className="container relative z-10 px-6 py-16 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our fresh, high-quality selection of organic products
          </p>
        </div>
      </div>

      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul
                      role="list"
                      className="px-2 py-3 font-medium text-gray-900"
                    >
                      {categories.map((category) => (
                        <li key={category.name}>
                          <button
                            onClick={() => handleCategoryChange(category.value)}
                            className={`block px-2 py-3 w-full text-left ${
                              selectedCategory === category.value
                                ? "text-indigo-600 font-bold"
                                : ""
                            }`}
                          >
                            {category.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto w-11/12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Browse Products
            </h1>

            {/* <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <button
                              onClick={() => handleSortChange(option.value)}
                              className={classNames(
                                selectedSort === option.value
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm w-full text-left"
                              )}
                            >
                              {option.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div> */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Categories
                </h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button
                        onClick={() => handleCategoryChange(category.value)}
                        className={`block text-left ${
                          selectedCategory === category.value
                            ? "text-indigo-600 font-bold"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <HomeProducts products={filteredProducts} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Products;
