import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex flex-row gap-16 flex-wrap justify-center mt-8">
        {products.map((product) => (
          <Link key={product.id} href={"/products/" + product.id}>
            <Image
              src={"/" + product.imageURL}
              width={150}
              height={150}
              alt="product"
              className="rounded size-150x150 object-cover"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p>R{product.price}</p>
            <button className="flex flex-row justify-center py-1 px-3 bg-indigo-500 font-bold rounded cursor-pointer hover:bg-indigo-800">Add<AiOutlineShoppingCart className="ml-2 size-6" /></button>
          </Link>
        ))}
      </div>
    </>
  );
}
