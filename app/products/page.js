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
  { name: "Birthday Gifts", value: "birthday", current: false },
  {
    name: "New Year/Christmas Gifts",
    value: "newyear-christmas",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const mockProducts = {
  data: [
    // Corporate Gifts : 1
    {
      _id: "1",
      name: "Executive Corporate Hamper",
      price: 159.99,
      description:
        "Professional hamper for corporate gifting and business relationships.",
      category: "corporate",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/corporate-hampers/hampers-corporate_2.jpeg",
      createdAt: "2024-04-20",
    },
    {
      _id: "1.1",
      name: "Executive Corporate Hamper",
      price: 159.99,
      description:
        "Professional hamper for corporate gifting and business relationships.",
      category: "corporate",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/corporate-hampers/hampers-corporate_1.jpg",
      createdAt: "2024-04-20",
    },
    // Diwali : 2
    {
      _id: "2",
      name: "Diwali Celebration Hamper",
      price: 99.99,
      description:
        "Traditional Diwali hamper with sweets, dry fruits, and festive items.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_1.jpeg",
      createdAt: "2024-05-05",
    },
    {
      _id: "2.1",
      name: "Festival of Lights Hamper",
      price: 109.99,
      description:
        "Celebrate Diwali with this beautiful collection of traditional treats.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_2.jpeg",
      createdAt: "2024-05-10",
    },
    {
      _id: "2.2",
      name: "Diwali Delights Hamper",
      price: 119.99,
      description:
        "Delightful Diwali hamper with premium sweets and decorative items.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_3.jpeg",
      createdAt: "2024-05-15",
    },
    {
      _id: "2.3",
      name: "Traditional Diwali Gift",
      price: 94.99,
      description:
        "Traditional hamper celebrating the joy and spirit of Diwali.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_4.jpeg",
      createdAt: "2024-05-20",
    },
    {
      _id: "2.4",
      name: "Festive Diwali Collection",
      price: 104.99,
      description:
        "Festive collection perfect for Diwali celebrations and gifting.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_5.jpeg",
      createdAt: "2024-05-25",
    },
    {
      _id: "2.5",
      name: "Diwali Special Hamper",
      price: 114.99,
      description:
        "Special Diwali hamper with traditional sweets and modern treats.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/diwali/hampers-diwali_6.jpeg",
      createdAt: "2024-05-30",
    },
    // Gifts : 3
    {
      _id: "3",
      name: "Corporate Excellence Gift",
      price: 149.99,
      description:
        "Professional gift hamper perfect for corporate clients and employees.",
      category: "corporate",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_5.jpeg",
      createdAt: "2024-05-12",
    },
    {
      _id: "3.1",
      name: "Festival Gift Hamper",
      price: 94.99,
      description:
        "Specially curated hamper for festival celebrations and joy.",
      category: "diwali",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_7.jpeg",
      createdAt: "2024-06-15",
    },
    {
      _id: "3.2",
      name: "Special Birthday Gift",
      price: 79.99,
      description:
        "Perfect gift for birthdays, anniversaries, and celebrations.",
      category: "birthday",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_3.jpeg",
      createdAt: "2024-03-10",
    },
    {
      _id: "3.3",
      name: "Birthday Celebration Box",
      price: 84.99,
      description:
        "Beautiful gift box perfect for any birthday celebration or milestone.",
      category: "birthday",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_8.jpeg",
      createdAt: "2024-06-20",
    },

    // New Year/Christmas Gifts : 4
    {
      _id: "4",
      name: "New Year Celebration Hamper",
      price: 124.99,
      description:
        "Ring in the New Year with this celebratory hamper filled with joy.",
      category: "newyear-christmas",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/new-year/hampers-new-year_1.jpeg",
      createdAt: "2024-06-05",
    },
    // Birthday : 5
    {
      _id: "5",
      name: "Birthday Party Hamper",
      price: 89.99,
      description:
        "Make birthdays extra special with this festive celebration hamper.",
      category: "birthday",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/birthday/hampers-birthday_1.jpeg",
      createdAt: "2024-03-15",
    },

    // All Products / General Gifts: 6
    {
      _id: "14",
      name: "Premium Gift Box",
      price: 89.99,
      description:
        "Elegant gift box with assorted premium items for special occasions.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_1.jpeg",
      createdAt: "2024-01-15",
    },
    {
      _id: "15",
      name: "Luxury Gift Collection",
      price: 129.99,
      description:
        "Luxurious collection of handpicked items for discerning recipients.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_2.jpeg",
      createdAt: "2024-02-20",
    },
    {
      _id: "16",
      name: "Elegant Gift Hamper",
      price: 99.99,
      description:
        "Sophisticated hamper with carefully curated premium products.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_4.jpeg",
      createdAt: "2024-04-05",
    },
    {
      _id: "17",
      name: "Deluxe Gift Set",
      price: 119.99,
      description: "Deluxe collection of premium items in beautiful packaging.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_6.jpeg",
      createdAt: "2024-06-01",
    },
    {
      _id: "18",
      name: "Gourmet Gift Collection",
      price: 109.99,
      description:
        "Exquisite collection of gourmet treats and premium delicacies.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_9.jpeg",
      createdAt: "2024-06-25",
    },
    {
      _id: "19",
      name: "Special Moments Gift",
      price: 74.99,
      description: "Perfect for creating special moments and lasting memories.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_10.jpeg",
      createdAt: "2024-06-28",
    },
    {
      _id: "20",
      name: "Premium Surprise Box",
      price: 134.99,
      description:
        "Surprise your loved ones with this premium collection of gifts.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/gifts/gift_11.jpeg",
      createdAt: "2024-06-30",
    },
    {
      _id: "21",
      name: "Baby Shower Blessing Hamper",
      price: 69.99,
      description:
        "Adorable hamper filled with baby essentials and keepsakes for new parents.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/baby-shower/hampers_baby-shower_1.jpeg",
      createdAt: "2024-01-20",
    },
    {
      _id: "22",
      name: "Sweet Baby Welcome Hamper",
      price: 79.99,
      description:
        "Welcome the little one with this sweet collection of baby gifts.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/baby-shower/hampers_baby-shower_2.jpeg",
      createdAt: "2024-02-10",
    },
    {
      _id: "23",
      name: "Raksha Bandhan Love Hamper",
      price: 74.99,
      description:
        "Celebrate sibling love with this special Raksha Bandhan hamper.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/rakshabandhan/hampers-rakshabandhan_1.jpeg",
      createdAt: "2024-06-10",
    },
    {
      _id: "24",
      name: "Brother-Sister Bond Hamper",
      price: 84.99,
      description:
        "Beautiful hamper celebrating the eternal bond between siblings.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/rakshabandhan/hampers-rakshabandhan_2.jpeg",
      createdAt: "2024-06-12",
    },
    {
      _id: "25",
      name: "Rakhi Festival Hamper",
      price: 79.99,
      description:
        "Traditional Rakhi hamper with sweets and gifts for your brother.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/rakshabandhan/hampers-rakshabandhan_3.jpeg",
      createdAt: "2024-06-18",
    },
    {
      _id: "26",
      name: "Sibling Celebration Hamper",
      price: 89.99,
      description:
        "Celebrate the special bond with this thoughtfully curated hamper.",
      category: "all",
      mainImage:
        "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/rakshabandhan/hampers-rakshabandhan_4.jpeg",
      createdAt: "2024-06-22",
    },
  ],
};

const Products = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popularity");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Initialize products on mount
  useEffect(() => {
    if (mockProducts?.data) {
      setFilteredProducts({ data: mockProducts.data });
    }
  }, []);

  useEffect(() => {
    if (mockProducts?.data) {
      let filtered = [...mockProducts.data]; // Create a copy to avoid mutating original data

      // Filter by category
      if (selectedCategory !== "all") {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }

      // Sort products
      switch (selectedSort) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filtered.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        case "popularity":
        default:
          // Keep original order for popularity (based on _id)
          filtered.sort((a, b) => parseInt(a._id) - parseInt(b._id));
          break;
      }

      setFilteredProducts({ data: filtered });
    }
  }, [selectedCategory, selectedSort]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sortOption) => {
    setSelectedSort(sortOption);
  };

  return (
    <div className="bg-white">
      {/* Hero section with background */}
      <div className="relative bg-[#d1988f] text-white">
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
            Discover our beautiful collection of thoughtfully curated gift
            hampers for every occasion
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
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              handleCategoryChange(category.value);
                            }}
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

            <div className="flex items-center">
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
            </div>
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
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryChange(category.value);
                        }}
                        className={`block text-left w-full ${
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
