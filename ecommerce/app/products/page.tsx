import Link from "next/link";
import { products } from "../product-data";
import ProductsList from "../ProductsList";

export default function ProductsPage() {
  return (
    <>
      <Link href={"/"}>
        <h1 className="font-bold text-3xl text-cyan-600 justify-self-center">
        Makhulu Store
      </h1>
      </Link>
      <ProductsList products={products} />
    </>
  );
}
