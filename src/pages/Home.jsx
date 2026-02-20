import { useEffect, useState } from "react";
import Card from "../ui/Card";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <main>
      <section className="p-10">
        <h1 className="text-center text-4xl mb-5">Products</h1>
        <div className="grid grid-cols-5 gap-5">
          {products.length === 0 ? (
            <p>no products yet</p>
          ) : (
            products.map((product) => (
              <Card product={product} key={product.id} />
            ))
          )}
        </div>
      </section>
    </main>
  );
}
