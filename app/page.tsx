"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Carousel from "./Carousel";
import Cart from "./Cart";
import Store, { Product } from "./Store";

export default function Home() {
  const [cartVisible, setCartVisible] = useState(false);
  const [storeData, setStoreData] = useState({ data: [] });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (product: Product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.title === product.title
    );

    setCartQuantity(cartQuantity + 1);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    fetchData().then((data) => {
      setStoreData(data);
    });
  }, []);

  async function fetchData() {
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
    <div>
      <section className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Navbar
          toggleCart={() => setCartVisible(!cartVisible)}
          cartQuantity={cartQuantity}
        />
        {cartVisible && (
          <Cart
            cartItems={cartItems}
            onCloseCart={() => setCartVisible(false)}
            updateCartQuantity={setCartQuantity}
          />
        )}
        <Carousel />

        <Store addToCartCallback={addToCart} />

        <About />
        <Footer />
      </section>
    </div>
  );
}
