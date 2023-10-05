import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  imageSrc: string;
  title: string;
  details: string[];
  description: string;
  price: string;
  paymentLink: string;
}

interface CartProps {
  cartItems: Product[];
  onCloseCart: () => void;
  updateCartQuantity: (newQuantity: number) => void;
}

function Cart({ cartItems, onCloseCart, updateCartQuantity }: CartProps) {
  const [productQuantities, setProductQuantities] = useState<number[]>(
    cartItems.map(() => 1)
  );

  useEffect(() => {
    const newQuantity = cartItems.reduce(
      (total, product, index) => total + productQuantities[index],
      0
    );
    updateCartQuantity(newQuantity);
  }, [cartItems, productQuantities]);

  const handleIncrement = (index: number) => {
    const newQuantities = [...productQuantities];
    newQuantities[index]++;
    setProductQuantities(newQuantities);
  };

  const handleDecrement = (index: number) => {
    const newQuantities = [...productQuantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setProductQuantities(newQuantities);
    }
  };

  const subtotal = cartItems.reduce((total, product, index) => {
    const productQuantity = productQuantities[index];
    const productPrice = parseFloat(product.price);
    return total + productQuantity * productPrice;
  }, 0);

  return (
    <section>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>

          <button
            onClick={onCloseCart}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
        <div className="mt-8">
          {cartItems.map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row border-b border-gray-400 py-4"
            >
              <div className=" w-[20%] lg:w-[25s%] h-[120px] lg:h-[200px]  relative">
                <Image
                  src={product.imageSrc}
                  fill
                  alt="Product image"
                  className=" object-cover"
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
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <span className="mx-2 text-gray-600">
                      {productQuantities[index]}
                    </span>
                    <button
                      className="bg-gray-200 rounded-r-lg px-2 py-1"
                      onClick={() => handleIncrement(index)}
                    >
                      +
                    </button>
                  </div>
                  <span className="ml-auto font-bold">
                    IDR.{" "}
                    {(
                      parseFloat(product.price) * productQuantities[index]
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center mt-8">
          <span className="text-gray-600 mr-4">Subtotal:</span>
          <span className="text-xl font-bold">IDR. {subtotal.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
}

export default Cart;
