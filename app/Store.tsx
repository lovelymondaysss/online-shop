"use client";
import React, { useEffect, useState } from "react";

export interface Product {
  imageSrc: string;
  title: string;
  details: string[];
  description: string;
  price: string;
  paymentLink: string;
  quantity: number;
}

interface Data {
  data: Product[];
}

function formatPrice(priceString: string) {
  if (typeof priceString !== "string") {
    return priceString;
  }
  const cleanPrice = priceString.replace(/[,.]/g, "");
  const formattedPrice = cleanPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return formattedPrice;
}

function Store({
  addToCartCallback,
}: {
  addToCartCallback: (product: Product) => void;
}) {
  const [products, setProducts] = useState<Data>({ data: [] });
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setProducts(data);
    });
  }, []);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  async function fetchData(): Promise<Data> {
    try {
      const response = await fetch(
        "https://script.googleusercontent.com/macros/echo?user_content_key=h--REthNoJ87vQCBmdlEq1Aiw20MhnRkuT3mR4WXSr6LN76gjfajtF-Z99tDHL6IVRvfOecBNw8o6EYKJXp7kaqRmM4FvM0Hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBaGAzaKMwks_cfPcwvF5zywt-HaNcjje65LpyjDSCFbrvvsyaSvm7xUPx2lzfe7UBB5xSimbGXc6YfOUSo4xXd_egYeKfpc8tz9Jw9Md8uu&lib=MLNoOwPN3UqtZQdMquLKhJrSQ5gX-Q1U7"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return { data: [] };
    }
  }

  return (
    <section className="bg-white py-8">
      <div className="container py-8 px-6 mx-auto space-y-4 text-balance text-justify">
        <nav id="store" className="w-full z-30 top-0 px-6 py-1">
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
            <a
              className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
              href="#"
            >
              Store
            </a>

            <div className="flex items-center" id="store-nav-content">
              <a
                className="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                </svg>
              </a>

              <a
                className="pl-3 inline-block no-underline hover:text-black"
                href="#"
              >
                <svg
                  className="fill-current hover:text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
          {products.data.map((product, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
            >
              <img
                className="hover:grow hover:shadow-lg"
                src={`https://drive.google.com/uc?export=view&id=${product.imageSrc}`}
                alt={product.title}
              />
              <div className="pt-3 flex items-center justify-between">
                <p className="text-xl font-bold">{product.title}</p>
              </div>
              <ul className="list-disc mt-5 ml-5">
                {product.details
                  ? product.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))
                  : null}
              </ul>
              <p className="pt-2 text-justify">{product.description}</p>
              <div className="flex flex-row justify-between pt-4 align-middle">
                <p className="pt-1 text-gray-900 font-bold">
                  {" "}
                  IDR {formatPrice(product.price)}
                </p>
                <a onClick={() => addToCartCallback(product)}>
                  <button className="border-2 border-black p-2 rounded-lg text-black hover:bg-green-400 hover:text-white hover:border-0">
                    Order
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Store;
