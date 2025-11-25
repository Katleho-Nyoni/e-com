import Image from "next/image";
import { products } from "@/app/product-data";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find(async (p) => p.id === (await params.id));

  return (
    <>
      <h2 className="font-bold text-2xl mb-6"> Product Details</h2>
      <Image src={"/" + product!.imageURL} alt={product!.name} width={200} height={200} />
      <h1 className="text-white font-bold">{product!.name}</h1>
      <p>R{product!.price}</p>
      <p>R{product!.description}</p>
    </>
  );
}
