"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "./Firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [uploading, setUploading] = useState(false);
  const storage = getStorage(app);
  const route = useRouter();

  const [products, setProducts] = useState([]);

  // upload image
  useEffect(() => {
    const upload = () => {
      setUploading(true);
      const name = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploading(false);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  // create Product
  const fetchProduct = async (e) => {
    e.preventDefault();
    try {
      if (media === undefined) {
        toast.error("Please upload an image");

        return;
      }
      if (uploading) {
        toast.error("Please wait while image is uploading");
        return;
      }
      {
        const res = await axios.post("/api/product", {
          name: name,
          price: price,
          description: description,
          category: category,
          mainImage: media,
        });
        route.push("/products");
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setFile(null);
        setMedia("");
        toast.success("Product created successfully");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);

      return;
    }
  };

  //  get all products - replaced with mock data
  useEffect(() => {
    // Mock product data with gift hampers
    const mockProducts = [
      {
        _id: "1",
        name: "Luxury Gift Hamper",
        price: 99.99,
        description:
          "A luxury gift hamper with assorted chocolates, wine, and gourmet snacks.",
        category: "premium",
        mainImage:
          "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "2",
        name: "Birthday Celebration Hamper",
        price: 79.99,
        description:
          "Perfect birthday gift hamper with cake, balloons, and personalized items.",
        category: "birthday",
        mainImage:
          "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "3",
        name: "Chocolate Lovers Hamper",
        price: 59.99,
        description:
          "Indulgent hamper filled with premium chocolates from around the world.",
        category: "chocolate",
        mainImage:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "4",
        name: "Wellness Gift Hamper",
        price: 89.99,
        description:
          "Self-care hamper with organic skincare products, herbal teas, and aromatherapy items.",
        category: "wellness",
        mainImage:
          "https://images.unsplash.com/photo-1584473457333-8c264c7d755d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "5",
        name: "Corporate Gift Basket",
        price: 129.99,
        description:
          "Professional gift hamper for business associates with premium items and elegant packaging.",
        category: "corporate",
        mainImage:
          "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "6",
        name: "Wine & Cheese Hamper",
        price: 119.99,
        description:
          "Sophisticated hamper with selected wines, artisanal cheeses, and gourmet crackers.",
        category: "gourmet",
        mainImage:
          "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "7",
        name: "Baby Shower Gift Hamper",
        price: 69.99,
        description:
          "Adorable hamper filled with baby essentials, toys, and keepsakes for new parents.",
        category: "baby",
        mainImage:
          "https://images.unsplash.com/photo-1544967082-d9d25d867d66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        _id: "8",
        name: "Tea Lover's Hamper",
        price: 49.99,
        description:
          "Delightful hamper for tea enthusiasts with premium teas, honey, and elegant teaware.",
        category: "tea",
        mainImage:
          "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ];

    // Set the mock products instead of making the API call
    setProducts({ data: mockProducts });

    // Keeping this commented code as reference
    // axios.get("/api/product").then((res) => {
    //   setProducts(res.data);
    // });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        uploading,
        setMedia,
        fetchProduct,
        name,
        setName,
        price,
        setPrice,
        description,
        setDescription,
        category,
        setCategory,
        file,
        setFile,
        media,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
