import { Link } from "react-router";

export default function Card({ product }) {
  return (
    <div className="card bg-base-300 shadow-sm">
      <Link to={`/products/${product.id}`} className="bg-white p-5">
        <img
          className="aspect-square object-contain"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <h2 className="card-title line-clamp-1">{product.title}</h2>
        </Link>
        <p className="line-clamp-3">{product.description}</p>
        <div className="badge badge-success">{product.price}$</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
