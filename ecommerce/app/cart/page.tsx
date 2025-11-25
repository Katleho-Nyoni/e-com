'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { products } from "../product-data";
export default function CartPage() {
  const [cartIds] = useState(["100", "101"]);
  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);
  return (
    <>
      <h1>Hello, World!</h1>
      {cartProducts.map((product) => (
        <Link key={product.id} href={"/products/" + product.id} >
          <div className="border py-3 px-4 border-amber-700">
            <Image src={"/" + product.imageURL} alt={product.name} width={80} height={80} />
          <h2 className="font-bold">{product.name}</h2>
          <p>R{product.price}</p>
          <button className="flex flex-row justify-center py-1 px-3 bg-amber-500 font-bold rounded cursor-pointer hover:bg-amber-800">Remove from <AiOutlineShoppingCart className="ml-2 size-6" /></button>
          </div>
        </Link>
      ))}
    </>
  );
}
