import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetails() {
  let params = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.pid}`,
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [params.pid]);
  if (!product) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product.title}</h1>
            <p className="py-6">{product.description}</p>
            <p className="text-success">{product.price}$</p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
