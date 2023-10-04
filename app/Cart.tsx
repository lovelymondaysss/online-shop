"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  imageSrc: string;
  title: string;
  details: string[];
  description: string;
  price: string;
  paymentLink: string;
}

interface Data {
  data: Product[];
}

function Cart() {
  const [products, setProducts] = useState<Data>({ data: [] });

  useEffect(() => {
    fetchData().then((data) => {
      setProducts(data);
    });
  }, []);

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
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
        <div className="mt-8">
          {products.data.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row border-b border-gray-400 py-4"
            >
              <div className="flex-shrink-0 relative">
                <Image
                  src={product.imageSrc}
                  fill
                  alt="Product image"
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center">
                  <span className="mr-2 text-gray-600">Quantity:</span>
                  <div className="flex items-center">
                    <button
                      className="bg-gray-200 rounded-l-lg px-2 py-1"
                      disabled
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-600">1</span>
                    <button
                      className="bg-gray-200 rounded-r-lg px-2 py-1"
                      disabled
                    >
                      +
                    </button>
                  </div>
                  <span className="ml-auto font-bold">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">
            $
            {products.data
              .reduce((total, product) => {
                return total + parseFloat(product.price);
              }, 0)
              .toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Cart;
