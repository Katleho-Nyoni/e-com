import Image from "next/image";
import Link from "next/link";
import { Product } from "./product-data";

export default function ProductsList({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex flex-row gap-16 flex-wrap justify-center mt-8">
        {products.map((product) => (
          <Link key={product.id} href={"/product-details"}>
            <Image
              src={"/" + product.imageURL}
              width={150}
              height={150}
              alt={product.name}
              className="rounded size-150x150 object-cover"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p>R{product.price}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
