"use client";
import Image from "next/image";
import CardSkeleton from "./CardSkeleton";
import Link from "next/link";

const HomeProducts = ({ show, products }) => {
  const mockProducts = products ?? {
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
        category: "birthday",
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
        name: "Corporate Gift Hampers",
        price: 129.99,
        description:
          "Professional gift hamper for business associates with premium items and elegant packaging.",
        category: "corporate",
        mainImage:
          "https://the-little-basket.s3.us-east-1.amazonaws.com/images/14.jpeg",
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
        _id: "6",
        name: "Tea Lover's Hamper",
        price: 49.99,
        description:
          "Delightful hamper for tea enthusiasts with premium teas, honey, and elegant teaware.",
        category: "tea",
        mainImage:
          "https://the-little-basket.s3.us-east-1.amazonaws.com/images/17.jpeg",
      },
      {
        _id: "8",
        name: "Wine & Cheese Hamper",
        price: 119.99,
        description:
          "Sophisticated hamper with selected wines, artisanal cheeses, and gourmet crackers.",
        category: "gourmet",
        mainImage:
          "https://the-little-basket.s3.us-east-1.amazonaws.com/images/hampers/corporate-hampers/hampers-corporate_2.jpeg",
      },
    ],
  };

  if (!mockProducts?.data) {
    return (
      <div
        className={`bg-white mx-auto ${show ? "w-full lg:w-10/12" : "w-full"}`}
      >
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  return (
    <div>
      <div className={`bg-white mx-auto ${show ? "w-10/12" : "w-full"}`}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-full lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
            {show
              ? mockProducts?.data
                  ?.slice(-4)
                  .map((product) => (
                    <div key={product?._id} className="group">
                      <Link href={"/products"}>
                        <div className="aspect-h-1 aspect-w-1 w-full  md:h-5/6 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <Image
                            width={500}
                            height={400}
                            src={product?.mainImage}
                            alt={product?.name}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                        {/* <h3 className="mt-4 text-sm text-gray-700">
                          {product?.name}
                        </h3> */}
                      </Link>
                    </div>
                  ))
                  .reverse()
              : mockProducts?.data?.map((product) => (
                  <div key={product?._id} className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full  md:h-3/4 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        width={300}
                        height={300}
                        src={product?.mainImage}
                        alt={product?.name}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    {/* <h3 className="mt-4 text-sm text-gray-700">
                      {product?.name}
                    </h3> */}
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
