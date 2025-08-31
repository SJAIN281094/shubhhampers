/**
 * Product Schema Component
 * Adds structured data for individual hamper products
 */

import React from "react";
import { HamperProduct } from "@lib/hamper-api-types";

interface ProductSchemaProps {
  product: HamperProduct;
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    description: product.description || `Curated ${product.title} from Shubhhampers`,
    image: product.images?.length > 0 ? product.images.map(img => img.url) : [],
    brand: {
      "@type": "Brand",
      name: "Shubhhampers"
    },
    category: product.categoryName || product.category,
    offers: {
      "@type": "Offer",
      availability: product.isActive
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: "INR",
      seller: {
        "@type": "Organization",
        name: "Shubhhampers"
      }
    },
    // Rating would be added when available in product data
    url: `https://www.shubhhampers.com/hampers/${product.slug}`
  };

  // Remove undefined properties
  const cleanSchema = JSON.parse(JSON.stringify(schema));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanSchema)
      }}
    />
  );
}

interface ProductListSchemaProps {
  products: HamperProduct[];
  categoryName?: string;
}

export function ProductListSchema({ products, categoryName }: ProductListSchemaProps) {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    name: categoryName ? `${categoryName} Gift Hampers` : "Curated Gift Hampers",
    description: `Curated collection of curated ${categoryName ? categoryName.toLowerCase() + " " : ""}hampers from Shubhhampers`,
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description || `Curated ${product.title}`,
        image: product.images?.[0]?.url,
        url: `https://www.shubhhampers.com/hampers/${product.slug}`,
        offers: {
          "@type": "Offer",
          availability: product.isActive
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          priceCurrency: "INR"
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}
