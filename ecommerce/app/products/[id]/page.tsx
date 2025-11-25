import { products } from "@/app/product-data";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find( async (p) => p.id === await params.id);

  return (
    <>
      <h1 className="text-white font-bold">{product!.name}</h1>
    </>
  );
}
