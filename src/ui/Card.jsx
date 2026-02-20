export default function Card({ product }) {
  return (
    <div className="card bg-base-300 shadow-sm">
      <figure className="bg-white p-[1.25rem]">
        <img
          className="aspect-square object-contain"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-1">{product.title}</h2>
        <p className="line-clamp-3">{product.description}</p>
        <div className="badge badge-success">{product.price}$</div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
