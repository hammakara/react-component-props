function ProductCard({ title, description, price, category,image }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt="Adobe After Effects"
        width="115"
        height="115"
      />
      <div className="product-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{price}</span>
        <span>{category}</span>
      </div>
    </div>
  )
}
export default ProductCard
